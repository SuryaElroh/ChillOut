import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {EvenementPage} from "../evenement/evenement";

declare var Chillout;

@Component({
  templateUrl: 'accueil-participant.html'
})

export class AccueilParticipantPage {
  events = [];

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
    // this.connexionDB();
  }

  allEvents() {
    Chillout.modelGetEvents ({ success: (data) => {
        this.events = data.data;
      }, error: (data) => {
        console.log('Erreur dans la récupération des évènements')
      }
    })
}


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
