import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../config';


  @Injectable({
    providedIn: 'root',
  })
  export class PostService {
    constructor(private http: HttpClient) {}
  
  getComments(post_id : number) {
    const commentsEndpoint = Config.BASE_URL + '/api/v1/slices/' + post_id + '/comments';
    return this.http.get(commentsEndpoint);
  }
  getReactions(post_id : number) {
    const reactionsEndpoint = Config.BASE_URL + '/api/v1/slices/' + post_id + '/reactions';
    return this.http.get(reactionsEndpoint);
  }
}