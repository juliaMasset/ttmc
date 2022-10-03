import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './pages/list-users/list-users.component';
import {AddUserComponent} from './pages/add-user/add-user.component';
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';


const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUsersComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
