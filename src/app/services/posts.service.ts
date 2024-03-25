import { Post, Comment } from './../interfaces/posts.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  public getComments(id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl + '?postId=' + id);
  }
}
