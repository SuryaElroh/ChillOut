import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {EvenementPage} from "../evenement/evenement";


@Component({
  templateUrl: 'accueil-participant.html'
})
export class AccueilParticipantPage {
  constructor(public navCtrl: NavController) {
    this.navCtrl=navCtrl;
  }

  evenementPage(){
    this.navCtrl.push(EvenementPage);
  }

}
