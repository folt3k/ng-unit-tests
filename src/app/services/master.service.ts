import { Injectable } from '@angular/core';
import { ValueService } from './value.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private valueService: ValueService) {}

  getMasterValue(): string {
    return `master:${this.valueService.getValue()}`;
  }

  getMasterValueObs$(): Observable<string> {
    return this.valueService
      .getValueObs$()
      .pipe(map((value) => `master:${value}`));
  }
}
