/**
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
};