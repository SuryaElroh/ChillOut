import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {CompteParticipantPage} from "../compte-participant/compte-participant";
import {RecherchePage} from "../recherche/recherche";


@Component({
  templateUrl: 'accueil-participant.html'
})
export class AccueilParticipantPage {
  constructor(public navCtrl: NavController) {
    this.navCtrl=navCtrl;
  }

  recherche(){
    this.navCtrl.push(RecherchePage)
  }

  profile(){
    this.navCtrl.push(CompteParticipantPage);
  }

}
