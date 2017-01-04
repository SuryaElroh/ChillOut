import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'evenement-perso.html'
})
export class EvenementPersoPage {
  constructor(public navCtrl: NavController) {
    this.navCtrl=navCtrl;
  }


}
