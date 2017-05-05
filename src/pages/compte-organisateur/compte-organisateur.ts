import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

declare var Chillout;


/*
 *
 * PAGE PROFILE
 *
 */
@Component({
  templateUrl: 'compte-organisateur.html'
})

export class CompteOrganisateurPage {

  name = "";
  address = "";
  email = "";
  phone = "";
  website = "";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.navCtrl = navCtrl;
    this.modalCtrl = modalCtrl;
    var infoOrganizer = Chillout.sessionGet("organizer");

    this.name = infoOrganizer.name;
    this.address = infoOrganizer.address;
    this.email = infoOrganizer.email;
    this.phone = infoOrganizer.user.phone;
    this.website = infoOrganizer.user.website;
  }
}
