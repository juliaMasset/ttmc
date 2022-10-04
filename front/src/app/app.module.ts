import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCartesComponent } from './pages/list-cartes/list-cartes.component';
import { AddCarteComponent } from './pages/add-carte/add-carte.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {GameComponent} from './pages/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    AddCarteComponent,
    ListCartesComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
