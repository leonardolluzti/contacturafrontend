import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactCreateEditComponent } from './contact-create-edit/contact-create-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LoginComponent } from './login/login.component';
import { UserCreateEditComponent } from './user-create-edit/user-create-edit.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'user_create_edit', component: UserCreateEditComponent},
  {path: 'contatc_creat_edit', component: ContactCreateEditComponent},
  {path: 'user_list', component: UserListComponent},
  {path: 'contact_list', component: ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
