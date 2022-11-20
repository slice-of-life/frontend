import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import moment from 'moment';
@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  constructor() {}

  ngOnInit(): void {}
  calcTime() {
    const postDate = new Date(this.post.created_at);
    return moment(postDate).fromNow();
  }
}
