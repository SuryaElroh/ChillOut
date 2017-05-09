import {Component} from '@angular/core';
import {ViewController} from "ionic-angular";

declare var Chillout;

@Component({
    templateUrl: 'creation-evenement.html'
})
export class CreationEvenementPage {
    form = {
        title: "",
        address: "",
        startTime: new Date(),
        endTime: new Date(),
        description: "",
        category_id: "",
        price: "",
    };
    /**
     * @description Constructor
     */
    constructor(public viewCtrl:ViewController) {
        console.log("on est sur la modal création d'événement");
    }
    /**
     * @description Quand on clique sur valider
     */
    valider() {
        console.log("création de l'événement form",this.form);
        Chillout.modelPutParticipant({
            title : this.form.title,
            address : this.form.address,
            startTime : this.form.startTime,
            endTime : this.form.endTime,
            description : this.form.description,
            category_id : this.form.category_id,
            user_id : Chillout.sessionGet("user").id,
            price : this.form.price,
            success: () => {
                console.log("création événement ok");
                Chillout.navRefresh("ProfileOrganizer");
            },
            error: (e) => {
                console.log(e);
            }
        })
    }
    /**
     * @description Quand on clique sur annuler
     */
    annuler() {
        console.log("on annule la création de l'événement");
        this.viewCtrl.dismiss();
    }
}
