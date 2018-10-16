import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  notes = [
    {
      title: "Differential equation",
      author: "akshat",
      date: "22/10/2017",
      views: 1093,
      size: 12.070000987665454
    },
    {
      title: "Intergration",
      author: "sakshi",
      date: "12/1/2018",
      views: 103,
      size: 22.1200009876
    }
  ]

  constructor(public navCtrl: NavController,
              public navParams: NavParams
              ) { }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  getTwoLetters(text: string) {
    const str = text.split(' ');
    if(str.length > 1) return (str[0][0].toUpperCase() + str[1][0].toUpperCase());
  else return str[0][0].toUpperCase();
  }
}
