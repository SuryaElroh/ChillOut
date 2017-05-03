import { Component } from '@angular/core';
import {NavController, ModalController, NavParams, ViewController} from "ionic-angular";
import {RecherchePage} from "../recherche/recherche";

declare var Chillout;

/*
 *
 * PAGE PROFILE
 *
 */

@Component({
  templateUrl: 'compte-participant.html'
})
export class CompteParticipantPage {

  nom = "";
  prenom = "";
  ddn = "";
  email = "";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.navCtrl = navCtrl;
    this.modalCtrl = modalCtrl;
    var infoParticipant = Chillout.sessionGet("participant");

    this.nom = infoParticipant.lastName;
    this.prenom = infoParticipant.firstName;
    this.ddn = infoParticipant.birthday;
    this.email = infoParticipant.user.email;
  }

  modalModifierInfo() {
    let modal = this.modalCtrl.create(ModalInfosPage);
    modal.present();
  }

  modalModifierMdp() {
    let modal = this.modalCtrl.create(ModalMdpPage);
    modal.present();
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
 * MODAL MODIF IDENTIFIANT
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
