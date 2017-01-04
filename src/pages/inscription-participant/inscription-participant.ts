import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {ConnexionPage} from "../connexion/connexion";
import {InscriptionOrganisateurPage} from "../inscription-organisateur/inscription-organisateur";

@Component({
  templateUrl: 'inscription-participant.html'
})
export class InscriptionParticipantPage {
  constructor(public navCtrl: NavController) {
    this.navCtrl=navCtrl;
  }

  nouveauCompte(){
    this.navCtrl.push(ConnexionPage);
  }
}
