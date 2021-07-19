import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

export interface Incidente { id: string; data: object; }
@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  constructor(public afs: AngularFirestore) { }


  getAllIncidets(){
    return this.afs.collection('incidencias').snapshotChanges().pipe(
      map(incidente => incidente.map(a => {
        const data = a.payload.doc.data() as Incidente;
        const id = a.payload.doc.id;
        return {id, ...data}
      })
    ))
  }

  getAllIncidetsPerUser(){
    const data = localStorage.getItem('datatecnic');
    const user = JSON.parse(data);
    return this.afs.collection('incidencias', ref => ref.where('data.tecnic.id', '==', user.id)).snapshotChanges().pipe(
      map(incidente => incidente.map(a => {
        const data = a.payload.doc.data() as Incidente;
        const id = a.payload.doc.id;
        return {id, ...data}
      })
    ));
  }

  getAllIncidents(){
    const data = localStorage.getItem('datatecnic');
    const user = JSON.parse(data);
    return this.afs.collection('incidencias', ref => ref.where('data.solicitante.cod_user', '==', user.cod_user)).valueChanges();
  }
}
