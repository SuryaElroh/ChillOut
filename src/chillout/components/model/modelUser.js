/**
 * @description Modifier un user
 */
Chillout.modelPutUser = function (p={}) {
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
    route : "users/" + p.id ,
    data : {
      email : p.email,
      password : p.password
    } ,
    success : (data) => {
     success(data);
    } ,
    error : function (data) {
      error (data);
    }
  });
};
