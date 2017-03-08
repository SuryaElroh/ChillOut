/**
 * @description récupère tout les participants
 */
Chillout.modelGetParticipants = function (parameters) {
    // default
    var error = this.modelError;
    var success = this.modelSuccess;
    // parameters
    if (parameters && parameters.hasOwnProperty ("success")) {
        success = parameters.success;
    }
    if (parameters && parameters.hasOwnProperty ("error")) {
        error = parameters.error;
    }
    // action
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
Chillout.modelGetParticipant = function (parameters) {
    // default
    var error = this.modelError;
    var success = this.modelSuccess;
    var id = "__REQUIRED__";
    // parameters
    if (parameters && parameters.hasOwnProperty ("success")) {
        success = parameters.success;
    }
    if (parameters && parameters.hasOwnProperty ("error")) {
        error = parameters.error;
    }
    if (parameters && parameters.hasOwnProperty ("id")) {
        id = parameters.id;
    }
    // control
    if (id === "__REQUIRED__") {
        return error (this.log ({
            "class" : "Chillout" ,
            "method" : "modelGetParticipantById" ,
            "msg" : "le paramètre id est obligatoire"
        }));
    }
    // action
    this.ajax ({
        route : "participants/" + id ,
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
Chillout.modelDeleteParticipant = function (parameters) {
    // default
    var error = this.modelError;
    var success = this.modelSuccess;
    var id = "__REQUIRED__";
    // parameters
    if (parameters && parameters.hasOwnProperty ("success")) {
        success = parameters.success;
    }
    if (parameters && parameters.hasOwnProperty ("error")) {
        error = parameters.error;
    }
    if (parameters && parameters.hasOwnProperty ("id")) {
        id = parameters.id;
    }
    // control
    if (id === "__REQUIRED__") {
        return error (this.log ({
            "class" : "Chillout" ,
            "method" : "modelDeleteParticipantById" ,
            "msg" : "le paramètre id est obligatoire"
        }));
    }
    // action
    this.ajax ({
        type : "delete" ,
        route : "participants/" + id ,
        data : {
            id : id
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
Chillout.modelPostParticipant = function (parameters) {
    // default
    var error = this.modelError;
    var success = this.modelSuccess;
    var email = "__REQUIRED__";
    var password = "__REQUIRED__";
    var firstName = "__REQUIRED__";
    var lastName = "__REQUIRED__";
    var birthday = "__REQUIRED__";
    // parameters
    if (parameters && parameters.hasOwnProperty ("success")) {
        success = parameters.success;
    }
    if (parameters && parameters.hasOwnProperty ("error")) {
        error = parameters.error;
    }
    if (parameters && parameters.hasOwnProperty ("email")) {
        email = parameters.email;
    }
    if (parameters && parameters.hasOwnProperty ("password")) {
        password = parameters.password;
    }
    if (parameters && parameters.hasOwnProperty ("firstName")) {
        firstName = parameters.firstName;
    }
    if (parameters && parameters.hasOwnProperty ("lastName")) {
        lastName = parameters.lastName;
    }
    if (parameters && parameters.hasOwnProperty ("birthday")) {
        birthday = parameters.birthday;
    }
    // control
    if (email === "__REQUIRED__") {
        return error (this.log ({
            "class" : "Chillout" ,
            "method" : "modelCreateParticipant" ,
            "msg" : "le paramètre [email] est obligatoire"
        }));
    }
    if (password === "__REQUIRED__") {
        return error (this.log ({
            "class" : "Chillout" ,
            "method" : "modelCreateParticipant" ,
            "msg" : "le paramètre [password] est obligatoire"
        }));
    }
    if (firstName === "__REQUIRED__") {
        return error (this.log ({
            "class" : "Chillout" ,
            "method" : "modelCreateParticipant" ,
            "msg" : "le paramètre [firstName] est obligatoire"
        }));
    }
    if (lastName === "__REQUIRED__") {
        return error (this.log ({
            "class" : "Chillout" ,
            "method" : "modelCreateParticipant" ,
            "msg" : "le paramètre [lastName] est obligatoire"
        }));
    }
    if (birthday === "__REQUIRED__") {
        return error (this.log ({
            "class" : "Chillout" ,
            "method" : "modelCreateParticipant" ,
            "msg" : "le paramètre [birthday] est obligatoire"
        }));
    }
    // action
    this.ajax ({
        type : "post" ,
        route : "participants" ,
        data : {
            email : email ,
            password : password ,
            firstName : firstName ,
            lastName : lastName ,
            birthday : birthday
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
Chillout.modelPutParticipant = function (parameters) {
    // default
    var error = this.modelError;
    var success = this.modelSuccess;
    var id = "__REQUIRED__";
    var firstName = "__REQUIRED__";
    var lastName = "__REQUIRED__";
    var birthday = "__REQUIRED__";
    // parameters
    if (parameters && parameters.hasOwnProperty ("success")) {
        success = parameters.success;
    }
    if (parameters && parameters.hasOwnProperty ("error")) {
        error = parameters.error;
    }
    if (parameters && parameters.hasOwnProperty ("id")) {
        id = parameters.id;
    }
    if (parameters && parameters.hasOwnProperty ("firstName")) {
        firstName = parameters.firstName;
    }
    if (parameters && parameters.hasOwnProperty ("lastName")) {
        lastName = parameters.lastName;
    }
    if (parameters && parameters.hasOwnProperty ("birthday")) {
        birthday = parameters.birthday;
    }
    // control
    if (id === "__REQUIRED__") {
        return error (this.log ({
            "class" : "Chillout" ,
            "method" : "modelCreateParticipant" ,
            "msg" : "le paramètre [id] est obligatoire"
        }));
    }
    if (firstName === "__REQUIRED__") {
        return error (this.log ({
            "class" : "Chillout" ,
            "method" : "modelCreateParticipant" ,
            "msg" : "le paramètre [firstName] est obligatoire"
        }));
    }
    if (lastName === "__REQUIRED__") {
        return error (this.log ({
            "class" : "Chillout" ,
            "method" : "modelCreateParticipant" ,
            "msg" : "le paramètre [lastName] est obligatoire"
        }));
    }
    if (birthday === "__REQUIRED__") {
        return error (this.log ({
            "class" : "Chillout" ,
            "method" : "modelCreateParticipant" ,
            "msg" : "le paramètre [birthday] est obligatoire"
        }));
    }
    // action
    this.ajax ({
        type : "put" ,
        route : "participants/" + id ,
        data : {
            firstName : firstName ,
            lastName : lastName ,
            birthday : birthday
        } ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};