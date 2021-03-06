// Déclaration de toutes les pages contenues dans l'app
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {CreationEvenementPage} from  '../pages/creation-evenement/creation-evenement';
import {ConnexionPage} from "../pages/connexion/connexion";
import {InscriptionParticipantPage} from "../pages/inscription-participant/inscription-participant";
import {InscriptionOrganisateurPage} from "../pages/inscription-organisateur/inscription-organisateur";
import {CompteParticipantPage} from "../pages/compte-participant/compte-participant";
import {CompteOrganisateurPage} from "../pages/compte-organisateur/compte-organisateur";
import {AccueilParticipantPage} from "../pages/accueil-participant/accueil-participant";
import {AccueilOrganisateurPage} from "../pages/accueil-organisateur/accueil-organisateur";
import {RecherchePage} from "../pages/recherche/recherche";
import {EvenementPersoPage} from "../pages/evenement-perso/evenement-perso";
import {EvenementPage} from "../pages/evenement/evenement";
import {DeconnexionPage} from "../pages/deconnexion/deconnexion";
import {ModalInfosPage} from "../pages/modal-infos-page/modal-infos-page";
import {ModalMdpPage} from "../pages/modal-mdp-page/modal-mdp-page";

@NgModule({
  declarations: [
    MyApp,
    ConnexionPage,
    DeconnexionPage,
    InscriptionParticipantPage,
    InscriptionOrganisateurPage,
    CompteParticipantPage,
    ModalInfosPage,
    ModalMdpPage,
    CompteOrganisateurPage,
    AccueilParticipantPage,
    AccueilOrganisateurPage,
    RecherchePage,
    CreationEvenementPage,
    EvenementPersoPage,
    EvenementPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConnexionPage,
    DeconnexionPage,
    InscriptionParticipantPage,
    InscriptionOrganisateurPage,
    CompteParticipantPage,
    ModalInfosPage,
    ModalMdpPage,
    CompteOrganisateurPage,
    AccueilParticipantPage,
    AccueilOrganisateurPage,
    RecherchePage,
    CreationEvenementPage,
    EvenementPersoPage,
    EvenementPage
  ],
  providers: []
})
export class AppModule {}
