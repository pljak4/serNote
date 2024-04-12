import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'posts',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterLink,
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  @Input() title: string;
  @Input() text: string;
  @Input() id: number;
  isExpanded: boolean = false;

  constructor() {
    this.text = '';
    this.title = '';
    this.id = 1;
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
