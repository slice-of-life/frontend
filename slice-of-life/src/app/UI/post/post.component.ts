import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import moment from 'moment';
import { PostService } from 'src/app/data/post.service';
import { CommentThread } from 'src/app/models/comment-thread.model';
@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  showComments : boolean;
  thread : CommentThread[];
  isLoading: boolean;

  constructor(private postService : PostService) {}

  ngOnInit(): void {}
  calcTime() {
    const postDate = new Date(this.post.created_at);
    return moment(postDate).fromNow();
  }

  openComments(){
    this.showComments = true;
    this.getComments(this.post.post_id);

  }

  getComments(post_id : number){
    this.isLoading = true;
    this.postService.getComments(post_id).subscribe({
      next : (data : any) => {
        this.thread = data.threads;
        this.isLoading = false;
        console.log(this.thread)
      },
      error : (error) => {

      },
      complete : () => {
        this.isLoading = false;
      }
    }
    )
  }
  
}
