import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';

@Injectable()
export class CommonProvider {

  constructor(
    private loading: LoadingController,
    private toast: ToastController
  ) { }

  getLoadingInstance(content: string, duration?: number, opts?) {
    return this.loading.create({ content, duration, ...opts });
  }

  getToastInstance(message: string, duration?: number, opts?) {
    return this.toast.create({ message, duration, ...opts });
  }

}