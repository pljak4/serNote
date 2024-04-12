import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Posts } from '../../utility/utils';
import { PostsService } from '../../services/service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
  ],
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit, OnDestroy {
  details$: Observable<Posts> | undefined;
  postId: number | undefined;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.postId = +params['id'];
      this.getPostDetails();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getPostDetails(): void {
    this.postId
      ? (this.details$ = this.postService.getPostsById(this.postId))
      : console.log('no id');
  }
}
