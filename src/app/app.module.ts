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
import { MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatStepperModule, MatProgressSpinnerModule } from '@angular/material';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarsoluComponent } from './share/sidebarsolu/sidebarsolu.component';
import { SidesolComponent } from './share/sidesol/sidesol.component';
import { UserComponent } from './pages/user/user.component';
import { CabeceraUserComponent } from './share/cabecera-user/cabecera-user.component';
import { NewIncidentUserComponent } from './modals/new-incident-user/new-incident-user.component';
import { SidebarUserComponent } from './share/sidebar-user/sidebar-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SolucionesComponent,
    InformesComponent,
    CabeceraComponent,
    NewIncidentComponent,
    SidebarComponent,
    SidebarsoluComponent,
    SidesolComponent,
    UserComponent,
    CabeceraUserComponent,
    NewIncidentUserComponent,
    SidebarUserComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    NewIncidentComponent,
    NewIncidentUserComponent
  ]
})
export class AppModule { }
