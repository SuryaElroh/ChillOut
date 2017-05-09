import {Component, ViewChild} from '@angular/core';
import {Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ConnexionPage} from "../pages/connexion/connexion";
import {CompteParticipantPage} from "../pages/compte-participant/compte-participant";
import {CompteOrganisateurPage} from "../pages/compte-organisateur/compte-organisateur";
import {AccueilParticipantPage} from "../pages/accueil-participant/accueil-participant";
import {AccueilOrganisateurPage} from "../pages/accueil-organisateur/accueil-organisateur";
import {EvenementPersoPage} from "../pages/evenement-perso/evenement-perso";
import {EvenementPage} from "../pages/evenement/evenement";
import {RecherchePage} from "../pages/recherche/recherche";
import {DeconnexionPage} from "../pages/deconnexion/deconnexion";

declare var Chillout;

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav:Nav;

    // make ConnexionPage the root (or first) page
    rootPage:any = ConnexionPage;
    pages:Array<{title:string, component:any}>;

    constructor(public platform:Platform,
                public menu:MenuController) {
        var root = {
            "HomeParticipant": AccueilParticipantPage,
            "ProfilParticipant": CompteParticipantPage,
            "HomeOrganizer": AccueilOrganisateurPage,
            "ProfileOrganizer": CompteOrganisateurPage,
            "OrganizerEvents": EvenementPersoPage,
            "Event": EvenementPage,
            "Research": RecherchePage,
        };
        console.log("Je suis dans le constructeur");
        if (Chillout.authIsConnected()) {
            console.log("Je suis connecté");
            if (Chillout.authIsOrganisateur()) {
                console.log("Je suis un organisateur");
                // Redirect to the page we want or Organizer home page
                if (Chillout.sessionGet("page")) {
                    this.rootPage = root[Chillout.sessionGetAndDestroy("page")];
                } else {
                    return Chillout.navRefresh("HomeOrganizer",false);
                }
                // set menu's pages
                this.pages = [
                    {title: 'Accueil', component: AccueilOrganisateurPage},
                    {title: 'Profil', component: CompteOrganisateurPage},
                    {title: 'Recherche', component: RecherchePage},
                    {title: 'Deconnexion', component: DeconnexionPage}
                ];
            }
            else {
                console.log("Je suis un participant");
                // Redirect to the page we want or Participant home page
                if (Chillout.sessionGet("page")) {
                    this.rootPage = root[Chillout.sessionGetAndDestroy("page")];
                } else {
                    return Chillout.navRefresh("HomeParticipant",false);
                }
                // set menu's pages
                this.pages = [
                    {title: 'Accueil', component: AccueilParticipantPage},
                    {title: 'Profil', component: CompteParticipantPage},
                    {title: 'Recherche', component: RecherchePage},
                    {title: 'Deconnexion', component: DeconnexionPage}
                ];
            }
        }
        this.initializeApp();
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
