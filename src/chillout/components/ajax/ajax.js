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
Chillout.ajax = function (p = {}) {
    // default
    var url = this.config.url;
    var data = function () {return {}} ();
    var error = this.modelError;
    var success = this.modelSuccess;
    var variables = [];
    var type = "get";
    var route = "";
    var form_data = null;
    var withToken = true;
    // parameters
    if (p.hasOwnProperty ("type")) {
        type = p.type;
    }
    if (p.hasOwnProperty ("route")) {
        route = p.route;
    }
    if (p.hasOwnProperty ("url")) {
        url = p.url;
    }
    if (p.hasOwnProperty ("data")) {
        data = p.data;
    }
    if (p.hasOwnProperty ("success")) {
        success = p.success;
    }
    if (p.hasOwnProperty ("error")) {
        error = p.error;
    }
    if (p.hasOwnProperty ("withToken")) {
        withToken = p.withToken;
    }
    // on ajoute le token au data
    var token = Chillout.authGetToken();
    if (token && withToken) data.token = token;
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
                var results = xhr.responseText;
                try {
                    results = JSON.parse (results);
                }
                catch (e) {
                    Chillout.log ({
                        "class" : "Chillout" ,
                        "result" : xhr.responseText,
                        "method" : "ajax" ,
                        "msg" : "in error :: the json is badely formated"
                    });
                }
                // if (results.status_code == 401) {
                //   Chillout.authDisconnectUser();
                // }
                error (results);
            }
        }
    };
    xhr.send (form_data);
};
