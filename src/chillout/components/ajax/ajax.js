/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  @Author Melvin Felix
 *  Function permettant de faire des requettes http
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Chillout.ajax = function (parameters) {
    // default
    var url = this.config.url;
    var data = function () {return {}} ();
    var error = this.modelError;
    var success = this.modelSuccess;
    var variables = [];
    var type = "get";
    var route = "";
    var form_data = null;
    // parameters
    if (parameters && parameters.hasOwnProperty ("type")) {
        type = parameters.type;
    }
    if (parameters && parameters.hasOwnProperty ("route")) {
        route = parameters.route;
    }
    if (parameters && parameters.hasOwnProperty ("url")) {
        url = parameters.url;
    }
    if (parameters && parameters.hasOwnProperty ("data")) {
        data = parameters.data;
    }
    if (parameters && parameters.hasOwnProperty ("success")) {
        success = parameters.success;
    }
    if (parameters && parameters.hasOwnProperty ("error")) {
        error = parameters.error;
    }
    // on ajoute le token au data
    var token = Chillout.authGetToken();
    if (token) data.token = token;
    // si on a le type get
    if (type === "get" || type === "put" || type === "delete") {
        for (var i in data) {
            variables.push( i + "=" + data[i]);
        }
    }
    // si on des type post
    if(type === "post" || type === "put" || type === "delete") {
        form_data = JSON.stringify (data);
    }
    var xhr = new XMLHttpRequest ();
    xhr.open (type.toUpperCase () , url + route + "?" + variables.join("&"));
    xhr.setRequestHeader ("Content-type" , "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              let successData = "nothing";
                try {successData = JSON.parse (xhr.responseText); }
                catch (e) {
                    Chillout.log ({
                        "class" : "Chillout" ,
                        "method" : "ajax" ,
                        "result" : xhr.responseText,
                        "msg" : "in success :: the json is badely formated"
                    });
                    console.log(e);
                }
              success(successData);
            }
            else {
                try {
                    var results = xhr.responseText;
                    var results = JSON.parse (results);
                    if (results.status_code == 401) {
                        Chillout.authDisconnectUser();
                    }
                    error (results);
                }
                catch (e) {
                    Chillout.log ({
                        "class" : "Chillout" ,
                        "result" : xhr.responseText,
                        "method" : "ajax" ,
                        "msg" : "in error :: the json is badely formated"
                    });
                  console.log(e);
                }
            }
        }
    };
    xhr.send (form_data);
};
