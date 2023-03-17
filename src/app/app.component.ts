import { Component } from '@angular/core';
import { ValueService } from './services/value.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-unit-tests';
  exampleValue = '';

  constructor(public valueService: ValueService) {}
}
