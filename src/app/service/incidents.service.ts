import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  constructor(public afs: AngularFirestore) { }


  getAllIncidets(){
    return this.afs.collection('incidencias').valueChanges();
  }

  getAllIncidetsPerUser(){
    const data = localStorage.getItem('datatecnic');
    const user = JSON.parse(data);
    return this.afs.collection('incidencias', ref => ref.where('data.tecnic.id', '==', user.id)).valueChanges();
  }

  getAllIncidents(){
    const data = localStorage.getItem('datatecnic');
    const user = JSON.parse(data);
    return this.afs.collection('incidencias', ref => ref.where('data.solicitante.cod_user', '==', user.cod_user)).valueChanges();
  }
}
