import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SUBJECTS } from '../../app/app.constants';

@IonicPage()
@Component({
  selector: 'page-get-subjects',
  templateUrl: 'get-subjects.html',
})
export class GetSubjectsPage {

  subjects = [];

  semester: number;
  branch: string;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    this.semester = Number(this.navParams.get('semester') || 0) + 1;
    this.branch = this.navParams.get('branch') || 'CSE';
    this.subjects = SUBJECTS[this.semester - 1][this.branch];
  }

  fetchNotes(subject: string) {
    this.navCtrl.push('ListPage', {
      semester: this.semester,
      branch: this.branch,
      type: this.navParams.get('type'),
      subject
    });
  }

}
