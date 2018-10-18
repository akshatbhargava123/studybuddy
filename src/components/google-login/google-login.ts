import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'google-login',
  templateUrl: 'google-login.html'
})
export class GoogleLoginComponent {

  text: string;

  constructor(
    private afAuth: AngularFireAuth,
    private googlePlus: GooglePlus
  ) { }

  async googleLogin() {
    this.nativeGoogleLogin()
  }

  async webGoogleLogin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithRedirect(provider)
      console.log(credential)
    }
    catch (er) {
      console.log(er)
    }
  }

  async nativeGoogleLogin() {
    try {
      const gPlusUser = await this.googlePlus.login({
        'webClientId': '176253723815-8rldlq0lhc9gp8qfv36tfod0neu3oict.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      });

      return await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gPlusUser.idToken)
      );
    } catch (error) {
      console.log(error)
    }
  }

}
