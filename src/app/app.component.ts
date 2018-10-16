import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient } from "@angular/common/http";
import { HttplibProvider } from '../providers/httplib/httplib';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private http: HttpClient, httplib: HttplibProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // Playground
    // this.http.get('assets/a.json').subscribe({
    //   next: (v) => {
    //     console.log(v)
    //   },
    //   error: (e) => {
    //     console.log(e)
    //   },
    //   complete: () => {
    //     console.log('complete');
    //   }
    // })

    const subscription = httplib.randomValues().subscribe(
      (value) => {
        console.log('my random value:', value);
        subscription.unsubscribe();
      },
      (error) => console.log('random value was one, no more')
    )
  }
}

