import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCartesComponent } from './pages/list-cartes/list-cartes.component';
import { AddCarteComponent } from './pages/add-carte/add-carte.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GameComponent} from './pages/game/game.component';
import {TeamsPageComponent} from './pages/teams-page/teams-page.component';
import {CarteReponsesComponent} from './components/carte-reponses/carte-reponses.component';
import {CarteQuestionsComponent} from './components/carte/carte-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    AddCarteComponent,
    ListCartesComponent,
    GameComponent,
    TeamsPageComponent,
    CarteReponsesComponent,
    CarteQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    CarteReponsesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
