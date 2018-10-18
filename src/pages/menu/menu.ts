import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdMobFreeRewardVideo } from '@ionic-native/admob-free';
import { AuthProvider } from '../../providers/auth/auth';
import { CommonProvider } from '../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild('content') nav: any;
  rootPage = 'SubjectsPage'

  params = {
    user: {}
  };

  constructor(
    private navCtrl: NavController,
    private auth: AuthProvider,
    private navParams: NavParams,
    private inAppBrowser: InAppBrowser,
  ) { }

  ionViewWillLoad() {
    this.initProfile();
  }

  initProfile() {
    this.params.user = this.navParams.get('user');
  }

  openPage(page, type?) {
    this.nav.setRoot(page, {
      type,
      user: this.params.user
    });
  }

  openYoutube() {
    const browser = this.inAppBrowser.create('https://www.youtube.com/user/zacklovemartin', '_system')
    browser.show();
  }

  logout() {
    this.auth.logout();
    this.navCtrl.setRoot('LoginPage');
  }

}
