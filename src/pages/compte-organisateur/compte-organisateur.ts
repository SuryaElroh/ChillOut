import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {CreationEvenementPage} from "../creation-evenement/creation-evenement";

declare var Chillout;

@Component({
    templateUrl: 'compte-organisateur.html'
})

export class CompteOrganisateurPage {

    name = "";
    address = "";
    email = "";
    phone = "";
    website = "";

    constructor(public navCtrl:NavController, public modalCtrl:ModalController) {
        this.name = Chillout.sessionGet("user").organizer.name;
        this.address = Chillout.sessionGet("user").organizer.address;
        this.email = Chillout.sessionGet("user").email;
        this.phone = Chillout.sessionGet("user").organizer.phone;
        this.website = Chillout.sessionGet("user").organizer.website;
    }

    /**
     * @description Ouvre la modal de création d'un événement
     */
    nouvelEvenement() {
        this.modalCtrl.create(CreationEvenementPage).present();
    }
}
