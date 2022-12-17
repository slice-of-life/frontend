import { Component, OnInit , Input} from '@angular/core';
import { CommentThread } from 'src/app/models/comment-thread.model';
import { Comment } from 'src/app/models/comment.model'
@Component({
  selector: 'thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  @Input() threads : CommentThread[];
  comments : Comment[];
  @Input() depth: number;

  constructor() { }

  ngOnInit(): void {  
  }
}
