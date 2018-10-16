import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class DbProvider {

  constructor(
    private afStore: AngularFirestore
  ) { }

  getSubjects(semester: number, branch: string) {
    const year = Math.ceil(semester / 2);
    const sem = semester % 2 ? 2 : 1
    // get available notes from storage
  }

  getFiles() {
    return this.afStore.collection('files').valueChanges();
  }

}
