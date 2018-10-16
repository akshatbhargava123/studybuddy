import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage implements OnInit {

  @ViewChild('videoPlayer') videoPlayer: any;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    let video = this.videoPlayer.nativeElement;
    video.src = 'assets/videos/splash.mp4'
    video.play();
    setTimeout(() => {
      const openedFirstTime = localStorage.getItem('opened_first_time');
      let rootPage = 'IntroSlidersPage'
      if (openedFirstTime != null) {
        rootPage = 'LoginPage';
      }
      this.navCtrl.setRoot(rootPage);
    }, 5200);
  }

}
