import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { CommonProvider } from '../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  downloads = [];
  loaded = false;

  constructor(
    private navCtrl: NavController,
    private common: CommonProvider,
    private file: File
  ) {
    this.initDownloads();
  }

  initDownloads() {
    const loading = this.common.getLoadingInstance('Fetching downloads...');
    loading.present();
    this.file.listDir(this.file.dataDirectory, "data").then(res => {
      loading.dismiss();
      this.loaded = true;
      const files = res.filter(res => res.isFile);
      this.downloads = files.map((file) => {
        const parts = file.name.split('-');
        const type = parts[0],
              semester = parts[1],
              branch = parts[2],
              subject = parts[3],
              fileName = parts[4];
        return { type, semester, branch, subject, fileName };
      });
    }).catch(err => {
      loading.dismiss();
      console.log(JSON.stringify(err))
    })
  }

  deleteFile(download) {
    const loading = this.common.getLoadingInstance('Deleting file...');
    loading.present();
    this.file.removeFile(
      this.file.dataDirectory + '/data',
      `${download.type}-${download.semester}-${download.branch}-${download.subject}-${download.fileName}`
    ).then(deleted => {
      loading.dismiss();
      if (deleted.success) {
        this.common.getToastInstance('File deleted successfully!', 1500).present();
        this.initDownloads();
      } else {
        this.common.getToastInstance('Error while deleting file!', 1500).present();
      }
    }).catch(err => {
      loading.dismiss();
      this.common.getToastInstance('Error while deleting file!', 1500).present();
      console.log(JSON.stringify(err))
    });
  }

}
