import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InformesComponent } from './pages/informes/informes.component';
import { LoginComponent } from './pages/login/login.component';
import { SolucionesComponent } from './pages/soluciones/soluciones.component';
import { UserComponent } from './pages/user/user.component';


const routes: Routes = [
{
  path:"",
  children: [
  {
    path: "", component: LoginComponent
  }
  ] 
},
{
  path:"",
  children: [
  {
    path: "home", component: HomeComponent
  }
  ] 
},
{
  path:"",
  children: [
  {
    path: "soluciones", component: SolucionesComponent
  }
  ] 
},
{
  path:"",
  children: [
  {
    path: "informes", component: InformesComponent
  }
  ] 
},
{
  path:"",
  children: [
  {
    path: "usuario", component: UserComponent
  }
  ] 
}
];

/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) */

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash:true})
