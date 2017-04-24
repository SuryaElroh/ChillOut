/**
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
};