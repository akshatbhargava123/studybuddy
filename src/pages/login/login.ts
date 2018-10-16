import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  semesters = [
    { number: "semester 1" },
    { number: "semester 2" },
    { number: "semester 3" },
    { number: "semester 4" },
    { number: "semester 5" },
    { number: "semester 6" },
    { number: "semester 7" },
    { number: "semester 8" }
  ]

  branches = [
    { name: "CSE" },
    { name: "IT" },
    { name: "ECE" },
    { name: "EEE" },
    { name: "Tools" },
    { name: "Mechatronics" },
    { name: "Civil" }
  ]

  colleges = [
    { name: "HMRITM" },
    { name: "MAIT" },
    { name: "BVP" },
    { name: "MSIT" },
    { name: "GTBIT" }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    this.navCtrl.setRoot('MenuPage');
  }

}
