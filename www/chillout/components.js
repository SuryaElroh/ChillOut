/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  Class window Chillout global cette class
 *  regroupe toute les méthodes codés par chillout
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
window.Chillout = function(){

};/*
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
        var url = "https://chillout.goto4ever.com:10443/participants";
        var data = function () {return {}} ();
        var next = function (data) {console.log (data);};
        var type = "get";
        // parameters
        if (parameters && parameters.hasOwnProperty ("type")) {
            type = parameters.type;
        }
        // parameters
        if (parameters && parameters.hasOwnProperty ("url")) {
            url = parameters.url;
        }
        // option
        if (parameters && parameters.hasOwnProperty ("data")) {
            data = parameters.data;
        }
        // option
        if (parameters && parameters.hasOwnProperty ("next")) {
            next = parameters.next;
        }
        // xhr
        var xhr = new XMLHttpRequest ();
        xhr.open (type.toUpperCase () , url);
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
};/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  @Author Melvin Felix
 *  Affiche les message d'erreur dans la console
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Chillout.prototype.log = function(parameters) {
    var warn;
    warn = "\n----------[ ERROR START ]----------\n\n";
    for (var i in parameters) {
        if (i == "expected") {
            try {
                parameters[i] = JSON.stringify (parameters[i] , null , 4);
            }
            catch (e) {
            }
        }
        warn += ":: " + i.toUpperCase () + " ::\n";
        warn += parameters[i] + "\n\n";
    }
    warn += "-----------[ ERROR END ]-----------\n";
    console.warn (warn);
};/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  @Author Melvin Felix
 *  @Source https://www.npmjs.com/package/cordova-plugin-local-notifications-mm
 *  Créer une notification sur le téléphone
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Chillout.prototype.pushNotification = function(parameters){
    // parameters
    var titre = parameters.titre;
    var message = parameters.message;
    // cordova
    cordova.plugins.notification.local.schedule ({
        id : 1 ,
        title : titre ,
        text : message
    });
};/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  @Author Melvin Felix
 *  Function permettant de faire vibrer le tel
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Chillout.prototype.vibrate = function (parameters) {
    // default
    var time = 1000;
    // parameters
    if (parameters) {
        // option
        if (parameters.hasOwnProperty ("time")) {
            time = parameters.time;
        }
    }
    // native - vibration
    navigator.vibrate(time);
};