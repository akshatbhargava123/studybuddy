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
    private rewardVideo: AdMobFreeRewardVideo
  ) { }

  openPage(page, type?) {
    this.nav.setRoot(page, {
      type
    });
  }

  redeemVideoPoints() {

    this.rewardVideo.config({
      id: 'ca-app-pub-7580695620404979/9051852268',
      isTesting: true,
      autoShow: true
    });
    this.rewardVideo.prepare().then(yes => {
      this.rewardVideo.show();
    })
  }

}
