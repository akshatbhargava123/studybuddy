import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { AdMobFree, AdMobFreeRewardVideo } from '@ionic-native/admob-free';
import { CommonProvider } from '../../providers/common/common';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-rewards',
  templateUrl: 'rewards.html',
})
export class RewardsPage {

  user: any = {};
  phone: number;

  rewardVideo: AdMobFreeRewardVideo;

  constructor(
    private auth: AuthProvider,
    private navParams: NavParams,
    private common: CommonProvider,
    private adMob: AdMobFree
  ) {
    this.user = this.navParams.get('user');
  }

  playVideo() {
    this.rewardVideo = this.adMob.rewardVideo;
    this.rewardVideo.config({
      id: 'ca-app-pub-7580695620404979/9051852268',
      isTesting: true,
      autoShow: true
    });

    this.rewardVideo.prepare();

    setTimeout(() => {
      this.rewardVideo.show();
    }, 3000);

    this.adMob.on(this.adMob.events.REWARD_VIDEO_REWARD).subscribe(() => {
      this.common.getToastInstance('Video was completed, you are rewarded!').present();
      this.user.points += 10;
      this.auth.updateProfile({
        ...this.user,
        points: this.user.points
      }).then(result => {
        this.common.getToastInstance('Updated Points!').present();
      });
    });

    this.adMob.on(this.adMob.events.REWARD_VIDEO_LOAD_FAIL).subscribe(_ => {
      this.common.getToastInstance('Reward Video failed to load...').present();
    })
    this.adMob.on(this.adMob.events.REWARD_VIDEO_CLOSE).subscribe(_ => {
      this.common.getToastInstance('Reward Video was closed by you...').present();
    })

  }

  redeem() {
    this.auth.addRedeemRequest({
      createdAt: new Date().toString(),
      paytmPhoneNumber: this.phone,
      points: this.user.points
    }).then(_ => {
      this.auth.updateProfile({
        ...this.user,
        points: 0
      });
    }).catch(error => console.log(error));
  }

}
