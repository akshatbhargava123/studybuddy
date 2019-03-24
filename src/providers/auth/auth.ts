import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase'

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
    return localStorage.getItem(AuthProvider.TOKEN_KEY);
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

  setDetailsInDb(uid, semester, branch, college, name) {
    return this.afDb.doc(`users/${uid}`).set({
      semester, branch, college, name
    });
  }

  updateProfile(profile: any) {
    return this.afDb.doc(`users/${this.getToken()}`).set(profile);
  }

  getUserDetails() {
    return this.afDb.doc(`users/${this.getToken()}`).valueChanges();
  }

  addRedeemRequest(redeemTransaction) {
    return this.afDb.collection('rewards').doc(this.afDb.createId()).set(redeemTransaction)
  }

  sendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification();
  }

  isEmailVerified() {
    return this.afAuth.auth.currentUser.emailVerified;
  }

  logout() {
    localStorage.clear();
  }

}
