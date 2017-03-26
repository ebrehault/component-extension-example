import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() { }

  getStuff() {
    return 'foo';
  }

}
