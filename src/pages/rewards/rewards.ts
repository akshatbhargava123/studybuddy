import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdMobFreeRewardVideo } from '@ionic-native/admob-free';
import { CommonProvider } from '../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-rewards',
  templateUrl: 'rewards.html',
})
export class RewardsPage {

  totalPoints = 0;

  constructor(
    private navCtrl: NavController,
    private common: CommonProvider,
    private rewardVideo: AdMobFreeRewardVideo
  ) { }

  playVideo() {
    this.rewardVideo.config({
      id: 'ca-app-pub-7580695620404979/9051852268',
      isTesting: true,
      autoShow: true
    });
    this.rewardVideo.prepare().then(yes => {
      if (yes) {
        this.rewardVideo.show().then(done => {
          this.totalPoints += 10;
        }).catch(error => this.common.getToastInstance(error, 1500).present())
      } else {
        this.common.getToastInstance('Something went wrong, please try again.', 1500).present();
      }
    }).catch(error => {
      this.common.getToastInstance(error, 1500).present();
    })
  }

}
