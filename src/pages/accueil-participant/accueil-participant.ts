import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {EvenementPage} from "../evenement/evenement";

declare var Chillout;

@Component({
  templateUrl: 'accueil-participant.html'
})

export class AccueilParticipantPage {
  events = [];

  constructor(public navCtrl : NavController ) {
    // this.connexionDB();
  }

  eventPage(event) {
    Chillout.sessionPut("event", event);
    this.navCtrl.push(EvenementPage);
  }

  DateTimeToDate(dateTime) {
    var newDate = Chillout.facadeLibraryMoment()(dateTime).format("DD MMM YY");
    return newDate;
  }

  DaysLeft(startDate) {
    var now = Chillout.facadeLibraryMoment()();
    var startDate = Chillout.facadeLibraryMoment()(startDate);
    var daysLeft = startDate.diff(now, 'days');

    if (daysLeft < 0) {
      return "";
    }

    return "Jour(s) restant(s) : " + daysLeft;
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
}
