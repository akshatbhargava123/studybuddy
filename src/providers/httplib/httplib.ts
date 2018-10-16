import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttplibProvider {

  constructor() { }

  randomValues() {
    return Observable.create((observer) => {
      const a = setInterval(() => {
        console.log('called')
        let randomVal = Math.random();
        observer.next(randomVal);
        if (randomVal > 0.99) {
          clearInterval(a);
          observer.error();
        }
      })
      return () => clearInterval(a)

    })
  }
}
