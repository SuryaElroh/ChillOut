/**
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
};