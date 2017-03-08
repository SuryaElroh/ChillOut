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
Chillout.prototype.ajax = function (parameters) {
    var that = this;
    return new Promise (function (resolve , reject) {
        // default
        var url = "https://chillout.goto4ever.com:10443/";
        var data = function () {return {}} ();
        var type = "get";
        var route = "";
        // parameters
        if (parameters && parameters.hasOwnProperty ("type")) {
            type = parameters.type;
        }
        // parameters
        if (parameters && parameters.hasOwnProperty ("route")) {
          route = parameters.route;
        }
        // parameters
        if (parameters && parameters.hasOwnProperty ("url")) {
            url = parameters.url;
        }
        // option
        if (parameters && parameters.hasOwnProperty ("data")) {
            data = parameters.data;
        }
        console.log(url + route);
        // xhr
        var xhr = new XMLHttpRequest ();
        xhr.open (type.toUpperCase () , url + route);
        xhr.setRequestHeader ("Content-type" , "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve (JSON.parse (xhr.responseText));
                }
                else {
                    reject (xhr);
                }
            }
            else {
                reject ();
            }
        };
        xhr.send (JSON.stringify (data));
    });
};
