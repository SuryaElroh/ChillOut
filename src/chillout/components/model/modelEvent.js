/**
 * @description récupère tout les events
 */
Chillout.modelGetEvents = function (p={}) {
    var error = this.modelError;
    var success = this.modelSuccess;
    if (p.hasOwnProperty ("success")) {
      success = p.success;
    }
    if (p.hasOwnProperty ("error")) {
      error = p.error;
    }
    this.ajax ({
        route : "events" ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description récupère un event grace a sont id
 */
Chillout.modelGetEvent = function (p={}) {
    var error = this.modelError;
    var success = this.modelSuccess;
    if (p.hasOwnProperty ("success")) {
      success = p.success;
    }
    if (p.hasOwnProperty ("error")) {
      error = p.error;
    }
    this.ajax ({
        route : "events/" + p.id ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
/**
 * @description supprime une event grace a son id
 */
Chillout.modelDeleteEvent = function (p={}) {
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
        route : "events/" + p.id ,
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
 * @description créer un event
 */
Chillout.modelPostEvent = function (p={}) {
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
        route : "events" ,
        data : {
            title : p.title,
            address : p.address,
            startTime : p.startTime,
            endTime : p.endTime,
            description : p.description,
            category_id : p.category_id,
            user_id : p.user_id,
            price : p.price,
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
 * @description créer un event
 */
Chillout.modelPutEvent = function (p={}) {
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
        route : "events/" + p.id ,
        data : {} ,
        success : function (data) {
            success (data);
        } ,
        error : function (data) {
            error (data);
        }
    });
};
