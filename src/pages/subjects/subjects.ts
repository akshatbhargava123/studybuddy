import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subjects',
  templateUrl: 'subjects.html',
})
export class SubjectsPage {

  items: any = [];
  itemExpandHeight: number = 100;

  subjects = [
    {
      name: "applied maths",
      color: "#921B30",
      expanded: false,
      icon: 'ios-arrow-forward'
    },
    {
      name: "applied physics",
      color: "#921B30",
      expanded: false,
      icon: 'ios-arrow-forward'
    },
    {
      name: "electrical technology",
      color: "#921B30",
      expanded: false,
      icon: 'ios-arrow-forward'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {

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

  getNotes() {
    this.navCtrl.push('ListPage');
  }

}
