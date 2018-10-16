import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubjectsPage } from './subjects';
import { DirectivesModule } from '../../directives/directives.module';
import { ExpandableComponent } from '../../components/expandable/expandable';

@NgModule({
  declarations: [
    ExpandableComponent,
    SubjectsPage
  ],
  imports: [
    IonicPageModule.forChild(SubjectsPage),
    DirectivesModule
  ],
})
export class SubjectsPageModule {}
