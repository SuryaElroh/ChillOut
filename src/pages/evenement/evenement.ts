import { Component } from '@angular/core';
import {NavParams} from "ionic-angular";

declare var Chillout;

@Component({
  templateUrl: 'evenement.html'
})
export class EvenementPage {

  constructor(public params: NavParams) {
    this.params.get("event");
    console.log(this.params.get("event"));
  }
}
