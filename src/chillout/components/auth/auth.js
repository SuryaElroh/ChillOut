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
        withToken : false,
        data : {
            email : login,
            password : password
        },
        route : "authenticate",
        success : (data) => {
          Chillout.authSetToken(data.token);
          console.log("je me suis bien connecté",data);
          this.sessionPut("user",data.user);
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
    this.sessionRemove("user");
    this.sessionRemove("page");
    this.authRemoveToken();
    this.navRefresh(null,false);
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
 * @description vérifie si un utilisateur est connecté
 */
Chillout.authIsOrganisateur = function () {
    if (this.sessionGet("user") && this.sessionGet("user").organizer) return true;
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
