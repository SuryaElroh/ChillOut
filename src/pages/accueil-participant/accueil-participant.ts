import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {EvenementPage} from "../evenement/evenement";

declare var Chillout;

@Component({
  templateUrl: 'accueil-participant.html'
})
export class AccueilParticipantPage {
  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
    // this.connexionDB();
  }

  events = [];

  // connexionDB(){
  //   var chillout = new Chillout();
  //   chillout.ajax({
  //     type: "get",
  //     // route : "participants",
  //     success:function(results){
  //       console.log(results)
  //     }
  //   });
  // }

  evenementPage(){
    this.navCtrl.push(EvenementPage);
  }

}
