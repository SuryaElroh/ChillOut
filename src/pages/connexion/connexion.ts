import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {InscriptionParticipantPage} from "../inscription-participant/inscription-participant";
import {InscriptionOrganisateurPage} from "../inscription-organisateur/inscription-organisateur";


@Component({
  templateUrl: 'connexion.html'
})
export class ConnexionPage {
  constructor(public navCtrl: NavController) {
    this.navCtrl=navCtrl;
  }

  nouveauParticipant(){
    this.navCtrl.push(InscriptionParticipantPage);
  }

  nouvelOrganisateur(){
    this.navCtrl.push(InscriptionOrganisateurPage);
  }
}
