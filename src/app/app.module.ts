import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { APP_ROUTING } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SolucionesComponent } from './pages/soluciones/soluciones.component';
import { InformesComponent } from './pages/informes/informes.component';
import { CabeceraComponent } from './share/cabecera/cabecera.component';
import { NewIncidentComponent } from './modals/new-incident/new-incident.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SolucionesComponent,
    InformesComponent,
    CabeceraComponent,
    NewIncidentComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    NewIncidentComponent
  ]
})
export class AppModule { }
