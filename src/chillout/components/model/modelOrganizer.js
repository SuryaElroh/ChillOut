/**
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
};