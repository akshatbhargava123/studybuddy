import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  subjects = [
    { title: "Non-availability of material" },
    { title: "Report Bug in App" },
    { title: "Internships" },
    { title: "Just to say hello" },
    { title: "Suggestion/Advice" },
    { title: "Others" }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
