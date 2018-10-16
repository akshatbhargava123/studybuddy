import { CommonProvider } from './../../providers/common/common';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';

const ZOOM_STEP:number = 0.10;
const DEFAULT_ZOOM:number = 1;

@IonicPage()
@Component({
  selector: 'page-view-file',
  templateUrl: 'view-file.html',
})
export class ViewFilePage {

  fileName: string;

  pdfsrc;
  pdfZoom = DEFAULT_ZOOM;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private file: File,
    private common: CommonProvider
  ) {
    this.fileName = this.navParams.get('fileName');
    console.log(this.fileName)
    this.file.readAsArrayBuffer(this.file.dataDirectory, this.fileName).then(arBuffer => {
      const fileURL = new Uint8Array(arBuffer);
      console.log(fileURL);
      this.pdfsrc = fileURL;
    }).catch(error => this.common.getToastInstance('Some error occured!', 1500).present());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewFilePage');
  }

  zoomIn() {
		this.pdfZoom += ZOOM_STEP;
	}

	zoomOut() {
		if (this.pdfZoom > DEFAULT_ZOOM) {
			this.pdfZoom -= ZOOM_STEP;
		}
	}

	resetZoom() {
		this.pdfZoom = DEFAULT_ZOOM;
	}

}
