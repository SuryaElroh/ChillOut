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
    var time = 1000;
    if (parameters && parameters.hasOwnProperty ("time")) time = parameters.time;
    navigator.vibrate(time);
};