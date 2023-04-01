import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: ` <h1 highlight="yellow">Something Yellow</h1>
    <h2 highlight>The Default (Gray)</h2>
    <h3>No Highlight</h3>
    <input #box [highlight]="box.value" />`,
})
class TestComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('render h1 with yellow background', () => {
    const h1El = fixture.nativeElement.querySelector('h1');

    expect(h1El.style.backgroundColor).toBe('yellow');
  });

  it('render h2 with default color', () => {
    const h1El = fixture.nativeElement.querySelector('h2');

    expect(h1El.style.backgroundColor).toBe('red');
  });

  it('render input with background color from value', () => {
    const inoutEl = fixture.nativeElement.querySelector(
      'input'
    ) as HTMLInputElement;

    inoutEl.value = 'green';
    fixture.detectChanges();

    expect(inoutEl.style.backgroundColor).toBe('green');
  });
});
