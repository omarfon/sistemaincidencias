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

}
