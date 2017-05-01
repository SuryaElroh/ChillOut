import { Component } from '@angular/core';
import {NavController, ModalController, NavParams, ViewController} from "ionic-angular";
import {RecherchePage} from "../recherche/recherche";

declare var Chillout;

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

  recherche(){
    this.navCtrl.push(RecherchePage)
  }

  profile() {
    this.navCtrl.push(CompteParticipantPage);
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

  @Component({
    templateUrl: 'modalInfos.html'
  })

export class ModalInfosPage {
   infos;

  constructor(public modalCtrl: ModalController, public params: NavParams, public viewCtrl: ViewController) {
    this.modalCtrl = modalCtrl;
    this.params = params;
    this.viewCtrl = viewCtrl;
    this.infos = this.params.data;
  }

  valider(){
    // TODO faire l'update des données de l'utilisateur dans la base de données
  }

  annuler(){
    this.viewCtrl.dismiss();
  }
}

@Component({
  templateUrl: 'modalMdp.html'
})

export class ModalMdpPage {

  constructor(public modalCtrl: ModalController, public params: NavParams, public viewCtrl: ViewController) {
    this.modalCtrl = modalCtrl;
    this.params = params;
    this.viewCtrl = viewCtrl;
  }

  valider(){
    // TODO faire l'update du mot de passe de l'utilisateur dans la base de données
  }

  annuler(){
    this.viewCtrl.dismiss();
  }
}
