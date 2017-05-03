/**
 * @description récupère tout les organizers
 */
Chillout.modelGetOrganizers = function (p={}) {
    var error = this.modelError;
    var success = this.modelSuccess;
    if (p.hasOwnProperty ("success")) {
      success = p.success;
    }
    if (p.hasOwnProperty ("error")) {
      error = p.error;
    }
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
Chillout.modelGetOrganizer = function (p={}) {
    var error = this.modelError;
    var success = this.modelSuccess;
    if (p.hasOwnProperty ("success")) {
      success = p.success;
    }
    if (p.hasOwnProperty ("error")) {
      error = p.error;
    }
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
Chillout.modelDeleteOrganizer = function (p={}) {
    var error = this.modelError;
    var success = this.modelSuccess;
    if (p.hasOwnProperty ("success")) {
      success = p.success;
    }
    if (p.hasOwnProperty ("error")) {
      error = p.error;
    }
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
Chillout.modelPostOrganizer = function (p={}) {
    var error = this.modelError;
    var success = this.modelSuccess;
    if (p.hasOwnProperty ("success")) {
      success = p.success;
    }
    if (p.hasOwnProperty ("error")) {
      error = p.error;
    }
    this.ajax ({
        type : "post" ,
        route : "organizers" ,
        data : {
          name : p.name ,
          address : p.address ,
          phone : p.phone ,
          website : p.website,
          email : p.email,
          password : p.password,
          description : p.description,
          certifyLevel : p.certifyLevel
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
 * @description modifier un organizer
 */
Chillout.modelPutOrganizer = function (p={}) {
    var error = this.modelError;
    var success = this.modelSuccess;
    if (p.hasOwnProperty ("success")) {
      success = p.success;
    }
    if (p.hasOwnProperty ("error")) {
      error = p.error;
    }
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
