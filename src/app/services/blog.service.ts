import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface Book {
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor() {}

  getArticle$(): Observable<Book> {
    return of({ title: 'Foo' }).pipe(delay(1000));
  }
}
