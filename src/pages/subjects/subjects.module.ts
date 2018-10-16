import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubjectsPage } from './subjects';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    SubjectsPage
  ],
  imports: [
    IonicPageModule.forChild(SubjectsPage),
    DirectivesModule
  ],
})
export class SubjectsPageModule {}
