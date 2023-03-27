import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

class MockMasterService {
  getMasterValue(): string {
    return 'foo';
  }
}

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let masterService: MasterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [
        {
          provide: MasterService,
          useClass: MockMasterService,
        },
      ],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    masterService = TestBed.inject(MasterService);
    fixture.detectChanges();
  });

  it('should have correct value', () => {
    expect(component.value).toBe(masterService.getMasterValue());
  });

  it('should have correct inputValue after input change', () => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    const inputValueEl = fixture.nativeElement.querySelector('.input-value');

    input.value = 'foo';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(inputValueEl.textContent).toContain('foo');
  });
});
