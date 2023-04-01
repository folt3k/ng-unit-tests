import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({ selector: '[highlight]' })
export class HighlightDirective implements OnChanges {
  defaultColor = 'red';

  @Input('highlight') bgColor = '';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor =
      this.bgColor || this.defaultColor;
  }
}
