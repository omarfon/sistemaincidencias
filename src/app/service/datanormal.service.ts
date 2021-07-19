import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

export interface Categoria { id: string; data: object; }
@Injectable({
  providedIn: 'root'
})
export class DatanormalService {
  public categorías : AngularFirestoreCollection<any>;

  constructor(public afs: AngularFirestore) {
    this.categorías = afs.collection<any>('categories')
   }

  getAllTecnics(){
    return this.afs.collection('tecnicos', ref => ref.orderBy('nombres', 'asc')).valueChanges();
  }

  getAllCategiories(){
    return this.categorías.valueChanges();
  
  }

  getAllUsers(){
    return this.afs.collection('Usuarios', ref => ref.orderBy('nombres', 'asc')).valueChanges();
  }

  getCategorieData(nameId){
    console.log(nameId);
    return this.afs.collection('categories', ref => ref.where('uid' ,'==', nameId)).valueChanges;
  }

  addTarea(id, tarea){
    console.log(id, tarea)
    return this.afs.collection('incidencias').doc(id.data).set({
        tareas: {
           tarea
        }
    })
  }

}
