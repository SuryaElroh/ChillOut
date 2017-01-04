import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {ConnexionPage} from "../connexion/connexion";
import {InscriptionParticipantPage} from "../inscription-participant/inscription-participant";

@Component({
  templateUrl: 'inscription-organisateur.html'
})
export class InscriptionOrganisateurPage {
  constructor(public navCtrl: NavController) {
    this.navCtrl=navCtrl;
  }

  nouveauCompte(){
    this.navCtrl.push(ConnexionPage);
  }
}
