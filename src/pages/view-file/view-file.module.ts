import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewFilePage } from './view-file';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    ViewFilePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewFilePage),
    PdfViewerModule
  ],
})
export class ViewFilePageModule {}
