import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models';
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent implements OnInit{
  constructor(private postService: PostService) { }

  posts : Post[]=[];
  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data:Post[])=>
        {
          //console.log(data);
          this.posts = data;
        },
      error => console.log(error)
    );
  }
}
