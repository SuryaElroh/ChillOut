import { Component, ViewChild } from '@angular/core';

import {Platform, MenuController, Nav} from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import  { CreationEvenementPage } from '../pages/creation-evenement/creation-evenement';
import {ConnexionPage} from "../pages/connexion/connexion";
import {InscriptionParticipantPage} from "../pages/inscription-participant/inscription-participant";
import {InscriptionOrganisateurPage} from "../pages/inscription-organisateur/inscription-organisateur";
import {CompteParticipantPage} from "../pages/compte-participant/compte-participant";
import {CompteOrganisateurPage} from "../pages/compte-organisateur/compte-organisateur";
import {AccueilParticipantPage} from "../pages/accueil-participant/accueil-participant";
import {RecherchePage} from "../pages/recherche/recherche";
import {EvenementPersoPage} from "../pages/evenement-perso/evenement-perso";
import {EvenementPage} from "../pages/evenement/evenement";


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

    // set our app's pages
    this.pages = [
      { title : 'Connexion', component: ConnexionPage },
      { title : 'Nouvel utilisateur', component: InscriptionParticipantPage },
      { title : 'Nouvel organisateur', component: InscriptionOrganisateurPage },
      { title : 'Profile utilisateur', component: CompteParticipantPage },
      { title : 'Profile organisateur', component: CompteOrganisateurPage },
      { title : 'Nouvel événement', component: CreationEvenementPage },
      { title : 'Accueil participant', component: AccueilParticipantPage },
      { title : 'Recherche', component: RecherchePage },
      { title : 'Visu event perso', component: EvenementPersoPage },
      { title : 'Evenement', component: EvenementPage }
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
