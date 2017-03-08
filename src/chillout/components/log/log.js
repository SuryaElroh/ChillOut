/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  @Author Melvin Felix
 *  Affiche les message d'erreur dans la console
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Chillout.log = function(parameters) {
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
    return parameters;
};