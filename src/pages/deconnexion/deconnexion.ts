import { Component } from '@angular/core';

declare var Chillout;

@Component({
  templateUrl: 'deconnexion.html',
})
export class DeconnexionPage {

  constructor() {
    Chillout.authDisconnectUser();
    Chillout.navRefresh();
  }
}
