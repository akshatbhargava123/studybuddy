import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  downloads = [
    {
      title: "Unit-1 differential",
      subject: "Applied Maths",
      type: "Notes"
    },
    {
      title: "Unit-3 Spectrum Changes",
      subject: "Applied Physics",
      type: "Question Paper"
    }
  ];

  constructor(
    private navCtrl: NavController,
    private file: File
  ) {
    this.file.listDir(this.file.dataDirectory, "data").then(res => {
      const files = res.filter(res => res.isFile);
      files.forEach((file) => {
        const parts = file.name.split('-');
        const type = parts[0],
              semester = parts[1],
              branch = parts[2],
              fileName = parts[3];
        console.log({ type, semester, branch, fileName });
      });
    }).catch(err => console.log(JSON.stringify(err)))
  }

}
