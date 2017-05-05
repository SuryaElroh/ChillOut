import { Component } from '@angular/core';
import {NavController, AlertController} from "ionic-angular";
import {InscriptionParticipantPage} from "../inscription-participant/inscription-participant";
import {InscriptionOrganisateurPage} from "../inscription-organisateur/inscription-organisateur";

declare var Chillout;

@Component({
  templateUrl: 'connexion.html',
})
export class ConnexionPage {

  identifiant="";
  mdp="";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  connexion(){
    Chillout.authConnectUser({login: this.identifiant, password: this.mdp, success: (data) => {
        Chillout.navRefresh();
    }, error: (data) => {
        let alert = this.alertCtrl.create({
          title: 'Erreur',
          subTitle: 'Identifiant / mot de passe invalide.',
          buttons: ['OK']
        });
        alert.present();
    }});
  }

  nouveauParticipant(){
    this.navCtrl.push(InscriptionParticipantPage);
  }

  nouvelOrganisateur(){
    this.navCtrl.push(InscriptionOrganisateurPage);
  }
}
