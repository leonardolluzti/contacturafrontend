import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserCreateEditComponent } from './user-create-edit/user-create-edit.component';
import { ContactCreateEditComponent } from './contact-create-edit/contact-create-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NavbarComponent } from './SharedComponent/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserCreateEditComponent,
    ContactCreateEditComponent,
    UserListComponent,
    ContactListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
