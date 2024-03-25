import { PostsService } from './services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Post, Comment } from './interfaces/posts.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  posts: Post[] = [];
  comments: Comment[] = [];
  selectedPostId: number = -1;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

  }

  toggleIsSelected(postId: number): void {
    if (this.selectedPostId === postId) {
      this.selectedPostId = -1;
      this.comments = [];
    } else {
      this.selectedPostId = postId;
      this.postsService.getComments(String(postId)).subscribe(comments => {
        this.comments = comments;
      });
    }
  }
}
