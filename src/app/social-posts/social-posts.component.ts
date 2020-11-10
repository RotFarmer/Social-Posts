import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'welcome',
      thought:
        "welcome to social posts, a place to post socially. why not share your thought's and opinions?",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  onSubmit = (post: Post): void => {
    this.posts.push(post);
  };
  onDelete = (index: number): void => {
    this.posts.splice(index, 1);
  };
}
