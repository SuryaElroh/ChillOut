import { Component, ViewChild } from '@angular/core';

import {Platform, MenuController, Nav} from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import {ConnexionPage} from "../pages/connexion/connexion";
import {CompteParticipantPage} from "../pages/compte-participant/compte-participant";
import {CompteOrganisateurPage} from "../pages/compte-organisateur/compte-organisateur";
import {AccueilParticipantPage} from "../pages/accueil-participant/accueil-participant";
import {RecherchePage} from "../pages/recherche/recherche";
import {EvenementPersoPage} from "../pages/evenement-perso/evenement-perso";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make ConnexionPage the root (or first) page
  rootPage: any = ConnexionPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set menu's pages
    this.pages = [
      { title : 'Recherche', component: RecherchePage },
      { title : 'Accueil participant', component: AccueilParticipantPage },
      { title : 'Profile participant', component: CompteParticipantPage },
      { title : 'Profile organisateur', component: CompteOrganisateurPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
