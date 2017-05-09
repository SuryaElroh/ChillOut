import {Component} from '@angular/core';
import {ViewController} from "ionic-angular";

declare var Chillout;

@Component({
    templateUrl: 'modal-infos-page.html'
})

export class ModalInfosPage {

    id = "";
    nom = "";
    prenom = "";
    ddn = "";

    constructor(public viewCtrl:ViewController) {
        this.id = Chillout.sessionGet("user").participant.id;
        this.nom = Chillout.sessionGet("user").participant.lastName;
        this.prenom = Chillout.sessionGet("user").participant.firstName;
        this.ddn = Chillout.sessionGet("user").participant.birthday;
    }

    valider() {
        Chillout.modelPutParticipant({
            id: this.id,
            firstName: this.prenom,
            lastName: this.nom,
            birthday: this.ddn,
            success: () => {
                console.log("modification infos ok");
                Chillout.navRefresh("ProfilParticipant");
            },
            error: (e) => {
                console.log(e);
            }
        })
    }

    annuler() {
        this.viewCtrl.dismiss();
    }
}