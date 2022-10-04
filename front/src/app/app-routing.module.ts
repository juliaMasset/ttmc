import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './pages/list-users/list-users.component';
import {AddUserComponent} from './pages/add-user/add-user.component';
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';
import {GameComponent} from './pages/game/game.component';


const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUsersComponent },
  { path: 'game', component: GameComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
