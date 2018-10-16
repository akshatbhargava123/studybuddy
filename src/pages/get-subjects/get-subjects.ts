import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-get-subjects',
  templateUrl: 'get-subjects.html',
})
export class GetSubjectsPage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
    ) { }

  fetchNotes() {
    this.navCtrl.push('ListPage');
  }
}
