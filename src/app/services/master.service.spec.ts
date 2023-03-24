import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';
import { of } from 'rxjs';

describe('MasterService', () => {
  let service: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MasterService,
        {
          provide: ValueService,
          useValue: jasmine.createSpyObj('ValueService', [
            'getValue',
            'getValueObs$',
          ]),	
        },
      ],
    });
    service = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(
      ValueService
    ) as jasmine.SpyObj<ValueService>;
  });

  it('should return master value', () => {
    valueServiceSpy.getValue.and.returnValue('foo');
    expect(service.getMasterValue()).toBe('master:foo');
  });

  it('should return master obs value', (done) => {
    valueServiceSpy.getValueObs$.and.returnValue(of('foo'));

    service.getMasterValueObs$().subscribe((value) => {
      expect(value).toBe('master:foo');
      done();
    });
  });
});
