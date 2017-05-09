import {Component} from '@angular/core';
import {ModalController} from "ionic-angular";
import {ModalInfosPage} from "../modal-infos-page/modal-infos-page";
import {ModalMdpPage} from "../modal-mdp-page/modal-mdp-page";

declare var Chillout;

@Component({
    templateUrl: 'compte-participant.html'
})
export class CompteParticipantPage {

    nom = "";
    prenom = "";
    ddn = "";
    email = "";

    constructor(public modalCtrl:ModalController) {
        this.nom = Chillout.sessionGet("user").participant.lastName;
        this.prenom = Chillout.sessionGet("user").participant.firstName;
        this.ddn = Chillout.sessionGet("user").participant.birthday;
        this.email = Chillout.sessionGet("user").email;
    }

    modalModifierInfo() {
        let modal = this.modalCtrl.create(ModalInfosPage);
        modal.present();
    }

    modalModifierMdp() {
        let modal = this.modalCtrl.create(ModalMdpPage);
        modal.present();
    }
}


