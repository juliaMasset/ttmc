import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCartesComponent} from './pages/list-cartes/list-cartes.component';
import {AddCarteComponent} from './pages/add-carte/add-carte.component';
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';
import {GameComponent} from './pages/game/game.component';
import {TeamsPageComponent} from './pages/teams-page/teams-page.component';


const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'add-carte', component: AddCarteComponent },
  { path: 'list-cartes', component: ListCartesComponent },
  { path: 'game', component: GameComponent},
  {path: 'teams-page', component: TeamsPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
