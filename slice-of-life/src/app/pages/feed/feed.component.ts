import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/data/feed.service';
import { Feed } from 'src/app/models/feed.model';
import { Post } from 'src/app/models/post.model';
@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  feed: Feed;
  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.feedService.getFeed().subscribe(
      (data: Feed) =>
        (this.feed = {
          next: data.next,
          page: data.page,
        })
    );
  }
}
