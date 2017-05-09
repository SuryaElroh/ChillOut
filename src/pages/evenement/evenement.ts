import {Component} from '@angular/core';

declare var Chillout;

@Component({
    templateUrl: 'evenement.html'
})
export class EvenementPage {
    event;

    constructor() {
        this.event = Chillout.sessionGetAndDestroy("event");
    }

    DateTimeToDate(dateTime) {
        var newDate = Chillout.facadeLibraryMoment()(dateTime).format("DD MMM YYYY");
        return newDate;
    }
}
