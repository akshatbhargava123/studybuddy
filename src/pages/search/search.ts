import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getSubjects() {
    this.navCtrl.push('GetSubjectsPage');
  }

}
