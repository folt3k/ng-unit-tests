import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { BlogService } from '../../services/blog.service';
import { delay, of } from 'rxjs';
import { cold, getTestScheduler } from 'jasmine-marbles';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let blogServiceSpy: jasmine.SpyObj<BlogService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogComponent],
      providers: [
        {
          provide: BlogService,
          useValue: jasmine.createSpyObj('BlogService', ['getArticle$']),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    blogServiceSpy = TestBed.inject(BlogService) as jasmine.SpyObj<BlogService>;
    fixture.detectChanges();
  });

  it('should render article title - sync test', () => {
    blogServiceSpy.getArticle$.and.returnValue(of({ title: 'foo' }));

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toMatch(/foo/i);
  });

  it('should render article title - fakeAsync test', fakeAsync(() => {
    blogServiceSpy.getArticle$.and.returnValue(
      of({ title: 'foo' }).pipe(delay(1000))
    );

    fixture.detectChanges();

    tick(1000);

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toMatch(/foo/i);
  }));

  it('should render article title - waitForAsync test', waitForAsync(() => {
    blogServiceSpy.getArticle$.and.returnValue(
      of({ title: 'foo' }).pipe(delay(1000))
    );

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toMatch(/foo/i);
    });
  }));

  it('should render article title - jasmine-marbles test', () => {
    blogServiceSpy.getArticle$.and.returnValue(
      cold('---x|', { x: { title: 'foo' } })
    );

    fixture.detectChanges();

    getTestScheduler().flush();

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toMatch(/foo/i);
  });
});
