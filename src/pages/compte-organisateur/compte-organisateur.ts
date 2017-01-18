import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { CreationEvenementPage } from '../creation-evenement/creation-evenement';
import {EvenementPersoPage} from "../evenement-perso/evenement-perso";
@Component({
  templateUrl: 'compte-organisateur.html'
})
export class CompteOrganisateurPage {
  constructor(public navCtrl: NavController) {
    this.navCtrl=navCtrl;
  }

  mesEvenements(){
    this.navCtrl.push(EvenementPersoPage);
  }

  nouvelEvenement(){
    this.navCtrl.push(CreationEvenementPage);
  }
}
