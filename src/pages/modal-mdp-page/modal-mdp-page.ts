import {Component} from '@angular/core';
import {ViewController} from "ionic-angular";

declare var Chillout;

@Component({
    templateUrl: 'modal-mdp-page.html'
})

export class ModalMdpPage {

    id = "";
    email = "";
    password = "";

    constructor(public viewCtrl:ViewController) {
        this.id = Chillout.sessionGet("user").id;
        this.email = Chillout.sessionGet("user").email;
    }

    valider() {
        Chillout.modelPutUser({
            email: this.email,
            password: this.password,
            id: this.id,
            success: () => {
                console.log("modification mdp ok");
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
