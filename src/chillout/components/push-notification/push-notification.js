/*
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
Chillout.pushNotification = function(parameters){
    var titre = parameters.titre;
    var message = parameters.message;
    cordova.plugins.notification.local.schedule ({
        id : 1 ,
        title : titre ,
        text : message
    });
};