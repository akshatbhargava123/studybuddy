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
  actualFileName: string;

  pdfsrc;
  pdfZoom = DEFAULT_ZOOM;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private file: File,
    private common: CommonProvider
  ) {
    this.fileName = this.navParams.get('fileName');
    const ar = this.fileName.split('-');
    this.actualFileName = ar[ar.length - 1];
    this.file.readAsArrayBuffer(this.file.dataDirectory + '/data', this.fileName).then(arBuffer => {
      const fileURL = new Uint8Array(arBuffer);
      this.pdfsrc = fileURL;
    }).catch(error => this.common.getToastInstance(error.message, 1500).present());
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
