import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CobiInitService {

  constructor() { }

  public initCobi(): Promise<void> {
    return new Promise<void>(((resolve, reject) => {
      COBI.init('token');
      setTimeout(() => resolve(), 2000);
    }));
  }
}
