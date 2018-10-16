import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SUBJECTS } from '../../app/app.constants';

@IonicPage()
@Component({
  selector: 'page-subjects',
  templateUrl: 'subjects.html',
})
export class SubjectsPage {

  items: any = [];
  itemExpandHeight: number = 100;

  semester: number = 0;
  branch: string = 'CSE';

  subjects = [];

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    this.initSubjects();
  }

  initSubjects() {
    this.subjects = SUBJECTS[this.semester][this.branch];
    this.subjects = this.subjects.map(subject => {
      return { name: subject, icon: 'ios-arrow-forward', expanded: false }
    });
  }

  expandItem(item) {
    this.subjects.forEach((listItem) => {
      if (item.name == listItem.name) {
        listItem.expanded = !listItem.expanded;
        listItem.icon = listItem.icon == 'ios-arrow-forward' ? 'ios-arrow-down' : 'ios-arrow-forward';
      } else {
        listItem.expanded = false;
        listItem.icon = 'ios-arrow-forward';
      }
    });
  }

  openList(subjectName: string, type: string) {
    const navParams = {
      semester: this.semester + 1,
      branch: this.branch,
      subject: subjectName,
      type
    };
    this.navCtrl.push('ListPage', navParams);
  }

}
