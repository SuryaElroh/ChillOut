Chillout.session = {};
/**
 * Récupère une valeur en session
 */
Chillout.sessionGet = function(attr){
    return JSON.parse(localStorage.getItem(attr));
};

/**
 * Récupère et détruit une session
 */
Chillout.sessionGetAndDestroy = function(attr){
  var data = this.sessionGet(attr);
  this.sessionRemove(attr);
  return data;
};
/**
 * Ajoute ou créer un attribut unique avec sa value
 * @param {String} attr
 * @param {*} value
 */
Chillout.sessionSet = function(attr, value){
    if (Object.keys(localStorage).indexOf(attr) !== -1 ) {
        return this.log({msg:"l'attribut [" + attr + "] est deja utilisé dans la session Chillout."});
    }
    this.sessionPut(attr, value);
};
/**
 * Ajoute ou créer un attribut avec sa value
 * @param {String} attr
 * @param {*} value
 */
Chillout.sessionPut = function(attr, value){
  localStorage.setItem(attr, JSON.stringify(value));
};

/**
 * Supprime un attribut
 * @param {String} attr
 */
Chillout.sessionRemove = function(attr){
  localStorage.removeItem(attr);
};
