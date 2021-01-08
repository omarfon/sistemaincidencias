import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CreateincidentService {

  constructor(public afs:AngularFirestore) { }

  createNewIncident(data){
    return this.afs.collection('incidencias').doc().set({
      data
    }, {merge:true})
    .catch(err => {
      return err
    })
  }
}
