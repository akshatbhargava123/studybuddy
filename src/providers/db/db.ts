import { Injectable } from '@angular/core';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class DbProvider {

  constructor() { }

  getSubjects(semester: number, branch: string) {
    const year = Math.ceil(semester / 2);
    const sem = semester % 2 ? 2 : 1
    // get available notes from storage

  }

}
