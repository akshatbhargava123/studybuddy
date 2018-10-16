import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroSlidersPage } from './intro-sliders';

@NgModule({
  declarations: [
    IntroSlidersPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroSlidersPage),
  ],
})
export class IntroSlidersPageModule {}
