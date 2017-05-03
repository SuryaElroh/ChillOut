import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { CreationEvenementPage } from '../creation-evenement/creation-evenement';
import {EvenementPersoPage} from "../evenement-perso/evenement-perso";

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
    this.navCtrl=navCtrl;
    this.modalCtrl = modalCtrl;
    var infoOrganizer = Chillout.sessionGet("organizer");

    this.name = infoOrganizer.name;
    this.address = infoOrganizer.address;
    this.email = infoOrganizer.email;
    this.phone = infoOrganizer.user.phone;
    this.website = infoOrganizer.user.website;
  }

  modalModifierInfo() {
    let modal = this.modalCtrl.create(ModalInfosPage);
    modal.present();
  }

  modalModifierMdp() {
    let modal = this.modalCtrl.create(ModalMdpPage);
    modal.present();
  }
  mesEvenements(){
    this.navCtrl.push(EvenementPersoPage);
  }

  nouvelEvenement(){
    this.navCtrl.push(CreationEvenementPage);
  }
}



/*
*
* MODAL MODIF INFO
*
 */
@Component({
  templateUrl: 'modalInfos.html'
})



export class ModalInfosPage {
  id = "";
  nom = "";
  prenom = "";
  ddn = "";

  constructor(public modalCtrl: ModalController, public params: NavParams, public viewCtrl: ViewController, public  navCtrl: NavController) {
    this.modalCtrl = modalCtrl;
    this.params = params;
    this.viewCtrl = viewCtrl;
    var infoParticipant = Chillout.sessionGet("participant");
    this.id = infoParticipant.id;
    this.nom = infoParticipant.lastName;
    this.prenom = infoParticipant.firstName;
    this.ddn = infoParticipant.birthday;
  }

  valider(){
    Chillout.modelPutParticipant({
      id: this.id,
      firstName: this.prenom,
      lastName: this.nom,
      birthday : this.ddn,
      success: (data) => {
        console.log("Succès de valider()");
        this.navCtrl.setRoot(CompteParticipantPage);
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  annuler(){
    this.viewCtrl.dismiss();
  }
}



/*
 *
 * MODAL MODIF IDENTIFIANTS
 *
 */

@Component({
  templateUrl: 'modalMdp.html'
})

export class ModalMdpPage {
  id = "";
  email = "";
  password = "";

  constructor(public modalCtrl: ModalController, public params: NavParams, public viewCtrl: ViewController, public  navCtrl: NavController) {
    this.modalCtrl = modalCtrl;
    this.params = params;
    this.viewCtrl = viewCtrl;
    var infoParticipant = Chillout.sessionGet("participant");
    this.id = infoParticipant.user_id;
    this.email = infoParticipant.email;
  }

  valider(){
    Chillout.modelPutUser({
      email: this.email,
      password: this.password,
      id : this.id,
      success: (data) => {
        console.log("Succès de valider()");
        this.navCtrl.setRoot(CompteParticipantPage);
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  annuler(){
    this.viewCtrl.dismiss();
  }
}
