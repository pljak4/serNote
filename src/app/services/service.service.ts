import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../utility/utils';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private baseApiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.baseApiUrl + 'posts');
  }

  getPostsById(id: number): Observable<Posts> {
    return this.http.get<Posts>(this.baseApiUrl + 'posts/' + id);
  }
}
