/**
 * @description rafraichir une page
 */
Chillout.navRefresh = function (page)  {
  if(page) {
    this.sessionPut("page", page);
  }
  Promise.all([this.authSetParticipant(), this.authSetOrganizer()]).then (function () {
    console.log("J'ai mis à jour les données dans le local storage");
    window.location.href = "";
  }).catch(e => {
    console.log("Attention les données n'ont pas été mise à jour");
  })
};
