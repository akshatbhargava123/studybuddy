import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TextAvatarDirective } from '../directives/text-avatar/text-avatar';
import { DirectivesModule } from '../directives/directives.module';
import { ExpandableComponent } from '../components/expandable/expandable';
import { AuthProvider } from '../providers/auth/auth';
import { DbProvider } from '../providers/db/db';
import { CommonProvider } from '../providers/common/common';
import { HttpClientModule } from '@angular/common/http';
import { HttplibProvider } from '../providers/httplib/httplib';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    DbProvider,
    CommonProvider,
    HttplibProvider
  ]
})
export class AppModule {}
