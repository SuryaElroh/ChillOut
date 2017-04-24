/**
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
};