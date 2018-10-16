import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  downloads = [
    {
      title: "Unit-1 differential",
      subject: "Applied Maths",
      type: "Notes"
    },
    {
      title: "Unit-3 Spectrum Changes",
      subject: "Applied Physics",
      type: "Question Paper"
    }
  ];

  constructor(
    private navCtrl: NavController
  ) { }

}
