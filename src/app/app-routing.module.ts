import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ContactCreateEditComponent } from './contact-create-edit/contact-create-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LoginComponent } from './login/login.component';
import { UserCreateEditComponent } from './user-create-edit/user-create-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard, AuthGuardAdmim } from './service/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserCreateEditComponent, canActivate: [AuthGuardAdmim]},
  {path: 'contact', component: ContactCreateEditComponent, canActivate: [AuthGuardAdmim]},
  {path: 'user_list', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'contact_list', component: ContactListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
