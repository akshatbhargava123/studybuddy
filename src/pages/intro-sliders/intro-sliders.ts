import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro-sliders',
  templateUrl: 'intro-sliders.html',
})
export class IntroSlidersPage {

  constructor(
    private navCtrl: NavController,
  ) {
    localStorage.setItem('opened_first_time', 'true');
  }

  goToLogin() {
    this.navCtrl.setRoot('LoginPage');
  }

}
