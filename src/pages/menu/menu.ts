import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdMobFreeRewardVideo } from '@ionic-native/admob-free';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild('content') nav: any;
  rootPage = 'SubjectsPage'

  constructor(
    private navCtrl: NavController,
    private inAppBrowser: InAppBrowser
  ) { }

  openPage(page, type?) {
    this.nav.setRoot(page, {
      type
    });
  }

  openYoutube() {
    const browser = this.inAppBrowser.create('https://www.youtube.com/user/zacklovemartin', '_system')
    browser.show();
  }

}
