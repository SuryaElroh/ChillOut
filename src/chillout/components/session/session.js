Chillout.session = {};
/**
 * Récupère une valeur en session
 */
Chillout.sessionGet = function(attr){
    return this.session[attr];
};
/**
 * Ajoute ou créer un attribut unique avec sa value
 * @param {String} attr
 * @param {*} value
 */
Chillout.sessionSet = function(attr, value){
    if (Object.keys(this.session).indexOf(attr) !== -1 ) {
        return this.log({msg:"l'attribut [" + attr + "] est deja utilisé dans la session Chillout."});
    }
    this.session[attr] = value;
};
/**
 * Ajoute ou créer un attribut avec sa value
 * @param {String} attr
 * @param {*} value
 */
Chillout.sessionPut = function(attr, value){
    this.session[attr] = value;
};