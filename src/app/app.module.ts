import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { materialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { UserPermissionsComponent } from './users/users-details/user-permissions/user-permissions.component';
import { ToolbarComponent } from './nav/toolbar/toolbar.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersDetailsComponent,
    UserPermissionsComponent,
    ToolbarComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    materialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  entryComponents: [UsersDetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
