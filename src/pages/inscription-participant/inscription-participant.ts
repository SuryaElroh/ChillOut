import {Component} from '@angular/core';
import {NavController, AlertController} from "ionic-angular";
import {ConnexionPage} from "../connexion/connexion";
import {first} from "rxjs/operator/first";

declare var Chillout;

@Component({
    templateUrl: 'inscription-participant.html'
})
export class InscriptionParticipantPage {
      email="";
      mdp="";
      mdp2="";
      nom="";
      prenom="";
      ddn="";

    constructor(public navCtrl:NavController,  public alertCtrl: AlertController) {
    }

    nouveauCompte() {
      Chillout.modelPostParticipant({
        email: this.email,
        password: this.mdp,
        firstName: this.prenom,
        lastName: this.nom,
        birthday: this.ddn,
        success: data => {
          let alert = this.alertCtrl.create({
            title: 'Succès',
            subTitle: 'Votre compte a bien été créé. \n Vous pouvez vous connectez !',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.pop(ConnexionPage);

        },
        error: data => {
          // TODO
        }
      })
    }
}
