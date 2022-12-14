import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feed } from '../models/feed.model';
import { Config } from '../config';
@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed() {
    const feedEndpoint = Config.BASE_URL + '/api/v1/slices/latest';
    return this.http.get(feedEndpoint);
  }
}
