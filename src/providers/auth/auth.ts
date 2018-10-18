import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AuthProvider {

  static TOKEN_KEY = 'token';

  constructor(
    private afAuth: AngularFireAuth,
    private afDb: AngularFirestore
  ) { }

  setToken(value: string) {
    return localStorage.setItem(AuthProvider.TOKEN_KEY, value);
  }

  getToken() {
    return localStorage.get(AuthProvider.TOKEN_KEY);
  }

  sendPasswordResetEmail(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  register(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  setDetailsInDb(uid, semester, branch, college) {
    return this.afDb.doc(`users/${uid}`).set({
      semester, branch, college
    });
  }

}
