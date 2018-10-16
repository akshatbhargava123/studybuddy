import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
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
            this.navCtrl.setRoot('LoginPage')
          }
        }
      ]
    });
    confirm.present();
  }
}


