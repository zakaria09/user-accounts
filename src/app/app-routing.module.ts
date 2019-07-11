import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
  {component: HomeComponent, path: ''},
  {component: UsersComponent, path: 'accounts'},
  {component: SigninComponent, path: 'signin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
