import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  @Input() title = '';
  @Output() loadMore = new EventEmitter<number>();

  private page = 2;

  constructor(public blogService: BlogService) {}
}
