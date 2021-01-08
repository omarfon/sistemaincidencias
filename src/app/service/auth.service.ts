import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afa: AngularFireAuth) { }

  sigIn(email, password){
    return this.afa.signInWithEmailAndPassword(email, password).then(resp =>{
      return resp
    }).catch(err =>{
      return err
    })
  }
}
