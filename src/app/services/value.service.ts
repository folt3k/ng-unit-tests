import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  constructor() {}

  getValue(): string {
    return 'value';
  }

  getValueObs$(): Observable<string> {
    return of('test');
}
}
