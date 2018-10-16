import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DbProvider } from '../../providers/db/db';
import { Note } from '../../app/app.models';
import { CommonProvider } from '../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  semester: number;
  branch: string;
  subject: string;
  type: string; // 'notes' / 'pfs' / 'ebooks'

  notesLoaded = false;

  notes: Note[] = [];

  constructor(
    private navParams: NavParams,
    private common: CommonProvider,
    private file: File,
    private fileTransfer: FileTransfer,
    private db: DbProvider
  ) {
    this.semester = Number(this.navParams.get('semester'));
    this.branch = this.navParams.get('branch');
    this.subject = this.navParams.get('subject');
    this.type = this.navParams.get('type') || 'ALL';
  }

  ionViewDidLoad() {
    const loading = this.common.getLoadingInstance('Loading...');
    loading.present();
    const subscription = this.db.getFiles().subscribe((notes: Note[]) => {
      this.notes = notes;
      this.filterNotes();
      this.notesLoaded = true;
      loading.dismiss();
      console.log(this.notes);
      subscription.unsubscribe();
    });
  }

  filterNotes() {
    this.notes = this.notes.filter(n => {
      return n.subject == this.subject && n.branch == this.branch && n.semester == this.semester && (this.type == 'ALL' || n.type == this.type)
    });
  }

  getTwoLetters(text: string) {
    const str = text.split(' ');
    if (str.length > 1) return (str[0][0].toUpperCase() + str[1][0].toUpperCase());
    else return str[0][0].toUpperCase();
  }

  download(source: string, name: string) {
    const ft = this.fileTransfer.create()
    const fileName = `${this.type}-${this.semester}-${this.branch}-${this.subject}-${name}.pdf`;
    this.common.getToastInstance(fileName);
    ft.onProgress = (progress) => console.log('progress:', progress)
    ft.download(source, this.file.dataDirectory + fileName).then(result => {
      console.log(result)
      this.common.getToastInstance(JSON.stringify(result));
    }).catch(err => console.log(err));
  }

}
