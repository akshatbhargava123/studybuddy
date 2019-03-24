import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  user: any = {};
  message: string = ''

  subjects = [
    { title: "Non-availability of material" },
    { title: "Report Bug in App" },
    { title: "Internships" },
    { title: "Just to say hello" },
    { title: "Suggestion/Advice" },
    { title: "Others" }
  ]

  constructor(
    private emailComposer: EmailComposer,
    private navParams: NavParams
  ) {
    this.user = this.navParams.get('user');
  }

  sendmsg() {
    this.emailComposer.requestPermission().then(yes => {
      if (yes) {
        this.emailComposer.open({
          subject: 'Submitting app feedback',
          to: 'smartstudyhub1@gmail.com',
          body: `
            Hello,

            ${this.message}

            ~${this.user.name}
          `
        })
      }
    });
  }

}
