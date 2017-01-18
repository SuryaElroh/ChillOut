/*
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