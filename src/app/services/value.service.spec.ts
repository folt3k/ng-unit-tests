import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('should return value', () => {
    expect(service.getValue()).toBe('value');
  });

  it('should return value from observable', (done) => {
    service.getValueObs$().subscribe((value) => {
      expect(value).toBe('test');
      done();
    });
  });
});
