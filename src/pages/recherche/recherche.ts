import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {CompteParticipantPage} from "../compte-participant/compte-participant";

@Component({
    templateUrl: 'recherche.html'
})
export class RecherchePage {

    dateDebut = "2016-12-15";
    dateFin = "2016-12-15";
    horaireDebut = "15:30";
    horaireFin = "15:30";

    constructor(public navCtrl:NavController, public modalCtrl:ModalController) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }

    recherche() {
        this.navCtrl.push(RecherchePage)
    }

    profile() {
        this.navCtrl.push(CompteParticipantPage)
    }

    rechercher() {

    }
}
