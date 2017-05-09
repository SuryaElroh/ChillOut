import {Component} from '@angular/core';
import {NavController, AlertController} from "ionic-angular";
import {ConnexionPage} from "../connexion/connexion";

declare var Chillout;

@Component({
    templateUrl: 'inscription-organisateur.html'
})

export class InscriptionOrganisateurPage {
    ds = "";
    adresse = "";
    tel = "";
    site = "";
    email = "";
    mdp = "";
    mdp2 = "";

    constructor(public navCtrl:NavController, public alertCtrl:AlertController) {
    }

    nouveauCompte() {
        Chillout.modelPostOrganizer({
            name: this.ds,
            address: this.adresse,
            phone: this.tel,
            website: this.site,
            email: this.email,
            password: this.mdp,
            description: "auncune description",
            certifyLevel: "1",
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
