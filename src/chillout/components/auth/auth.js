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
    this.sessionPut("isOrganizer", 0);
    console.log(parameters);
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

    this.sessionPut("login", login);

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
        withToken : false,
        data : {
            email : login,
            password : password
        },
        route : "authenticate",
        success : (data) => {
          Chillout.authSetToken(data.token);
          Promise.all([this.authSetParticipant(), this.authSetOrganizer()]).then (function () {
            console.log("Je suis dans la promise");
            success(data);
          }).catch(e => {
            error(e);
          })
        },
        error : function(data){
            error(data);
        }
    });
};

/**
 * @description Récupère les données du participant
 */
Chillout.authSetParticipant = function() {
  return new Promise((resolve, reject) => {
    console.log("je suis dans participant");
    this.ajax({
      type : "get",
      data : {},
      route : "participants",
      success : (data) => {
        console.log("je suis dans participant success");
        data.data.forEach(participant => {
          if(participant.user.email === this.sessionGet("login")) {
            this.sessionPut("participant", participant);
          }
        });
        resolve();
      },
      error : function(data){
        console.log("je suis dans participant error");
        reject(data);
      }
    });
  })
}

/**
 * @description Récupère les données de l'organisateur
 */
Chillout.authSetOrganizer = function() {
  return new Promise((resolve, reject) => {
    this.ajax({
      type: "get",
      data: {},
      route: "organizers",
      success: (data) => {
        console.log("je suis dans organisateur success");
        data.data.forEach(organizer => {
          if (organizer.user.email === this.sessionGet("login")) {
            this.sessionPut("organizer", organizer);
            this.sessionPut("isOrganizer", 1);
          }
        });
        resolve();
      },
      error: function (data) {
        console.log("je suis dans organisateur error");
        reject(data);
      }
    });
  })
}


/**
 * @description déconnecte un utilisateur
 */
Chillout.authDisconnectUser = function () {
    this.sessionRemove("isOrganizer");
    this.sessionRemove("participant");
    this.sessionRemove("organizer");
    this.sessionRemove("login");
    this.authRemoveToken();
    this.navRefresh();
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
};
