import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { materialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { UserPermissionsComponent } from './users/users-details/user-permissions/user-permissions.component';
import { ToolbarComponent } from './nav/toolbar/toolbar.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChangePasswordComponent } from './users/users-details/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersDetailsComponent,
    UserPermissionsComponent,
    ToolbarComponent,
    SidenavComponent,
    HomeComponent,
    RulesComponent,
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    materialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    UsersDetailsComponent,
    RulesComponent,
    ForgotPasswordComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
