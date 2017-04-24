/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  Class window Chillout global cette class
 *  regroupe toute les méthodes codés par chillout
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
window.Chillout = function(){

};/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  @Author Melvin Felix
 *  Function permettant de faire des requettes http
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Chillout.ajax = function (parameters) {
    // default
    var url = this.config.url;
    var data = function () {return {}} ();
    var error = this.modelError;
    var success = this.modelSuccess;
    var variables = [];
    var type = "get";
    var route = "";
    var form_data = null;
    // parameters
    if (parameters && parameters.hasOwnProperty ("type")) {
        type = parameters.type;
    }
    if (parameters && parameters.hasOwnProperty ("route")) {
        route = parameters.route;
    }
    if (parameters && parameters.hasOwnProperty ("url")) {
        url = parameters.url;
    }
    if (parameters && parameters.hasOwnProperty ("data")) {
        data = parameters.data;
    }
    if (parameters && parameters.hasOwnProperty ("success")) {
        success = parameters.success;
    }
    if (parameters && parameters.hasOwnProperty ("error")) {
        error = parameters.error;
    }
    // on ajoute le token au data
    var token = Chillout.authGetToken();
    if (token) data.token = token;
    // si on a le type get
    if (type === "get" || type === "put" || type === "delete") {
        for (var i in data) {
            variables.push( i + "=" + data[i]);
        }
    }
    // si on des type post
    if(type === "post" || type === "put" || type === "delete") {
        form_data = JSON.stringify (data);
    }
    var xhr = new XMLHttpRequest ();
    xhr.open (type.toUpperCase () , url + route + "?" + variables.join("&"));
    xhr.setRequestHeader ("Content-type" , "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                try { success (JSON.parse (xhr.responseText)); }
                catch (e) {
                    Chillout.log ({
                        "class" : "Chillout" ,
                        "method" : "ajax" ,
                        "result" : xhr.responseText,
                        "msg" : "in success :: the json is badely formated"
                    });
                }
            }
            else {
                try {
                    var results = xhr.responseText;
                    var results = JSON.parse (results);
                    if (results.status_code == 401) {
                        Chillout.authDisconnectUser();
                    }
                    error (results);
                }
                catch (e) {
                    Chillout.log ({
                        "class" : "Chillout" ,
                        "result" : xhr.responseText,
                        "method" : "ajax" ,
                        "msg" : "in error :: the json is badely formated"
                    });
                }
            }
        }
    };
    xhr.send (form_data);
};
/**
 * @description connect un utilisateur
 * @exemple Chillout.authConnectUser({login:"bobby@gmail.com",password:"bobby"});
 */
Chillout.authConnectUser = function (parameters) {
    // default
    var error = this.modelError;
    var success = this.modelSuccess;
    var login = "__REQUIRED__";
    var password = "__REQUIRED__";
    // parameters
    if (parameters && parameters.hasOwnProperty ("login")) {
        login = parameters.login;
    }
    if (parameters && parameters.hasOwnProperty ("password")) {
        password = parameters.password;
    }
    if (parameters && parameters.hasOwnProperty ("success")) {
        success = parameters.success;
    }
    if (parameters && parameters.hasOwnProperty ("error")) {
        error = parameters.error;
    }
    // control
    if (login === "__REQUIRED__") {
        return error(this.log({
            "class" : "Chillout",
            "method" : "authConnectUser",
            "msg" : "le paramètre login est obligatoire"
        }));
    }
    if (password === "__REQUIRED__") {
        return error(this.log({
            "class" : "Chillout",
            "method" : "authConnectUser",
            "msg" : "le paramètre password est obligatoire"
        }));
    }
    // action
    this.ajax({
        type : "post",
        data : {
            email : login,
            password : password
        },
        route : "authenticate",
        success : function(data){
            Chillout.authSetToken(data.token);
            success(data);
        },
        error : function(data){
            error(data);
        }
    });
};
/**
 * @description déconnecte un utilisateur
 */
Chillout.authDisconnectUser = function () {
    this.authRemoveToken();
};
/**
 * @description vérifie si un utilisateur est connecté
 */
Chillout.authIsConnected = function () {
    var token = this.authGetToken();
    if (token) return true;
    return false;
};
/**
 * @description récupère le token
 */
Chillout.authGetToken = function () {
    return localStorage.getItem (this.config.token_attr);
};
/**
 * @description set le token
 */
Chillout.authSetToken = function (value) {
    localStorage.setItem (this.config.token_attr , value);
};
/**
 * @description détruit le token
 */
Chillout.authRemoveToken = function () {
    localStorage.removeItem(this.config.token_attr);
};Chillout.config = {
    token_attr : "token",
    url : "https://chillout.goto4ever.com/"
};/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  @Author Melvin Felix
 *  Affiche les message d'erreur dans la console
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Chillout.log = function(parameters) {
    var warn;
    warn = "\n----------[ ERROR START ]----------\n\n";
    for (var i in parameters) {
        if (i == "expected") {
            try {
                parameters[i] = JSON.stringify (parameters[i] , null , 4);
            }
            catch (e) {
            }
        }
        warn += ":: " + i.toUpperCase () + " ::\n";
        warn += parameters[i] + "\n\n";
    }
    warn += "-----------[ ERROR END ]-----------\n";
    console.warn (warn);
    return parameters;
};/**
 * @description function par defaut des success
 */
Chillout.modelError = function (error) {
    console.log (error);
};
/**
 * @description function par defaut des errors
 */
Chillout.modelSuccess = function (error) {
    console.log (error);
};/**
 * @description récupère tout les categories
 */
Chillout.modelGetCategories = function () {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        route : "categories" ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description récupère un categorie grace a sont id
 */
Chillout.modelGetCategorie = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        route : "categories/" + p.id ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description supprime une categorie grace a son id
 */
Chillout.modelDeleteCategorie = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "delete" ,
        route : "categories/" + p.id ,
        data : {
            id : p.id
        } ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un categorie
 */
Chillout.modelPostCategorie = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "post" ,
        route : "categories" ,
        data : {} ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un categorie
 */
Chillout.modelPutCategorie = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "put" ,
        route : "categories/" + p.id ,
        data : {} ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};/**
 * @description récupère tout les chills
 */
Chillout.modelGetChills = function () {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        route : "chills" ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description récupère un chill grace a sont id
 */
Chillout.modelGetChill = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        route : "chills/" + p.id ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description supprime une chill grace a son id
 */
Chillout.modelDeleteChill = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "delete" ,
        route : "chills/" + p.id ,
        data : {
            id : p.id
        } ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un chill
 */
Chillout.modelPostChill = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "post" ,
        route : "chills" ,
        data : {} ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un chill
 */
Chillout.modelPutChill = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "put" ,
        route : "chills/" + p.id ,
        data : {} ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};/**
 * @description récupère tout les comments
 */
Chillout.modelGetComments = function () {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        route : "comments" ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description récupère un comment grace a sont id
 */
Chillout.modelGetComment = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        route : "comments/" + p.id ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description supprime une comment grace a son id
 */
Chillout.modelDeleteComment = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "delete" ,
        route : "comments/" + p.id ,
        data : {
            id : p.id
        } ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un comment
 */
Chillout.modelPostComment = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "post" ,
        route : "comments" ,
        data : {} ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un comment
 */
Chillout.modelPutComment = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "put" ,
        route : "comments/" + p.id ,
        data : {} ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};/**
 * @description récupère tout les events
 */
Chillout.modelGetEvents = function () {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        route : "events" ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description récupère un event grace a sont id
 */
Chillout.modelGetEvent = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        route : "events/" + p.id ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description supprime une event grace a son id
 */
Chillout.modelDeleteEvent = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "delete" ,
        route : "events/" + p.id ,
        data : {
            id : p.id
        } ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un event
 */
Chillout.modelPostEvent = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "post" ,
        route : "events" ,
        data : {} ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un event
 */
Chillout.modelPutEvent = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "put" ,
        route : "events/" + p.id ,
        data : {} ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};/**
 * @description récupère tout les images
 */
Chillout.modelGetImages = function () {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        route : "images" ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description récupère un image grace a sont id
 */
Chillout.modelGetImage = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    // action
    this.ajax ({
        route : "images/" + p.id ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description supprime une image grace a son id
 */
Chillout.modelDeleteImage = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "delete" ,
        route : "images/" + p.id ,
        data : {
            id : p.id
        } ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un image
 */
Chillout.modelPostImage = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "post" ,
        route : "images" ,
        data : {} ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un image
 */
Chillout.modelPutImage = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "put" ,
        route : "images/" + p.id ,
        data : {} ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};/**
 * @description récupère tout les organizers
 */
Chillout.modelGetOrganizers = function () {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        route : "organizers" ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description récupère un organizer grace a sont id
 */
Chillout.modelGetOrganizer = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    // action
    this.ajax ({
        route : "organizers/" + p.id ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description supprime une organizer grace a son id
 */
Chillout.modelDeleteOrganizer = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "delete" ,
        route : "organizers/" + p.id ,
        data : {
            id : p.id
        } ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un organizer
 */
Chillout.modelPostOrganizer = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "post" ,
        route : "organizers" ,
        data : {} ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un organizer
 */
Chillout.modelPutOrganizer = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "put" ,
        route : "organizers/" + p.id ,
        data : {} ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};/**
 * @description récupère tout les participants
 */
Chillout.modelGetParticipants = function () {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        route : "participants" ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description récupère un participant grace a sont id
 */
Chillout.modelGetParticipant = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        route : "participants/" + p.id ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description supprime une participant grace a son id
 */
Chillout.modelDeleteParticipant = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "delete" ,
        route : "participants/" + p.id ,
        data : {
            id : p.id
        } ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un participant
 */
Chillout.modelPostParticipant = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "post" ,
        route : "participants" ,
        data : {
            email : p.email ,
            password : p.password ,
            firstName : p.firstName ,
            lastName : p.lastName ,
            birthday : p.birthday
        } ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description créer un participant
 */
Chillout.modelPutParticipant = function (p) {
    var error = this.modelError;
    var success = this.modelSuccess;
    this.ajax ({
        type : "put" ,
        route : "participants/" + p.id ,
        data : {
            firstName : p.firstName ,
            lastName : p.lastName ,
            birthday : p.birthday
        } ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  @Author Melvin Felix
 *  @Source https://www.npmjs.com/package/cordova-plugin-local-notifications-mm
 *  Créer une notification sur le téléphone
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Chillout.prototype.pushNotification = function(parameters){
    var titre = parameters.titre;
    var message = parameters.message;
    cordova.plugins.notification.local.schedule ({
        id : 1 ,
        title : titre ,
        text : message
    });
};/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  @Author Melvin Felix
 *  Function permettant de faire vibrer le tel
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Chillout.prototype.vibrate = function (parameters) {
    var time = 1000;
    if (parameters && parameters.hasOwnProperty ("time")) time = parameters.time;
    navigator.vibrate(time);
};