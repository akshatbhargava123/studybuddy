import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetSubjectsPage } from './get-subjects';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    GetSubjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(GetSubjectsPage),
    DirectivesModule

  ],
})
export class GetSubjectsPageModule {}
