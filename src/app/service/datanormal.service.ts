import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DatanormalService {

  constructor(public afs: AngularFirestore) { }

  getAllTecnics(){
    return this.afs.collection('tecnicos', ref => ref.orderBy('nombres', 'asc')).valueChanges();
  }

  getAllCategiories(){
    return this.afs.collection('categorías' ).snapshotChanges();
  }

  getAllUsers(){
    return this.afs.collection('Usuarios', ref => ref.orderBy('nombres', 'asc')).valueChanges();
  }

}
