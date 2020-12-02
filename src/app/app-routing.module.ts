import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
{
  path:"",
  children: [
  {
    path: "", component: LoginComponent
  }
  ] 
}
];

/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) */

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash:true})
