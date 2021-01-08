import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatatecnicService {

  constructor(public afs:AngularFirestore) { }


  getDataTecnic(){
    const usuario:any = localStorage.getItem('user');
    
    const uid = JSON.parse(usuario);
    console.log(uid)
    return this.afs.collection('tecnicos', ref => ref.where('uid', '==', uid.uid)).valueChanges();
  }

  getDataUser(){
    const usuario:any = localStorage.getItem('user');
    
    const uid = JSON.parse(usuario);
    console.log(uid)
    return this.afs.collection('Usuarios', ref => ref.where('uid', '==', uid.uid)).valueChanges();
  }
}
