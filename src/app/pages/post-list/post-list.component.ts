import { Component } from '@angular/core';
import { PostsService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { Posts } from '../../utility/utils';
import { Observable } from 'rxjs';
import { PostsComponent } from '../../components/posts/posts.component';

@Component({
  selector: 'list',
  standalone: true,
  imports: [CommonModule, PostsComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class ListComponent {
  posts$: Observable<Posts[]> | undefined;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
