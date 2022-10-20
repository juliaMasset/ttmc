import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCartesComponent} from './pages/list-cartes/list-cartes.component';
import {AddCarteComponent} from './pages/add-carte/add-carte.component';
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';
import {GameComponent} from './pages/game/game.component';
import {WinnerComponent} from './pages/winner/winner.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'add-carte', component: AddCarteComponent },
  { path: 'list-cartes', component: ListCartesComponent },
  { path: 'game', component: GameComponent},
  {path: 'winner', component: WinnerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
