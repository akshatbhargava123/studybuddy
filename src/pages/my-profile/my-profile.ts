import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  user = {};

  constructor(
    private auth: AuthProvider,
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController
  ) { }

  ionViewWillLoad() {
    this.user = this.navParams.get('user');
  }

  changeInfo() {
    const confirm = this.alertCtrl.create({
      title: 'Sure about data?',
      message: 'In order to Change your Data, you just need to Sign-in again using your Gmail',
      buttons: [
        {
          text: 'Go Back'
        },
        {
          text: 'Proceed',
          handler: () => {
            this.auth.logout();
            this.navCtrl.setRoot('LoginPage')
          }
        }
      ]
    });
    confirm.present();
  }
}


