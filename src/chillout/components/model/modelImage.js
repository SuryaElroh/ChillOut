/**
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
};