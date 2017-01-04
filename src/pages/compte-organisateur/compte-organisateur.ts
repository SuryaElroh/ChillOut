import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { CreationEvenementPage } from '../creation-evenement/creation-evenement';
@Component({
  templateUrl: 'compte-organisateur.html'
})
export class CompteOrganisateurPage {
  constructor(public navCtrl: NavController) {
    this.navCtrl=navCtrl;
  }

  nouvelEvenement(){
    this.navCtrl.push(CreationEvenementPage);
  }
}
