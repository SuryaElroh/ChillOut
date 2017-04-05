import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {ConnexionPage} from "../connexion/connexion";

declare var Chillout;
@Component({
    templateUrl: 'inscription-participant.html'
})
export class InscriptionParticipantPage {

    form = {
        "email": "",
        "password": "",
        "passwordComfirm": "",
        "lastName": "",
        "firstName": "",
        "birthday": ""
    };

    constructor(public navCtrl:NavController) {
        this.navCtrl = navCtrl;
    }

    nouveauCompte() {
        var chillout = new Chillout();
        chillout.ajax({
            type : "post",
            data: this.form
        })
            .then(function (res) {
                console.log(res);
                alert("wouhouuuu !!");
            });
    }
}
