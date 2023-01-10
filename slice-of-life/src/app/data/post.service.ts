import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Config } from '../config';


  @Injectable({
    providedIn: 'root',
  })
  export class PostService {
    constructor(private http: HttpClient, private authService : AuthService) {}
  
  getComments(post_id : number) {
    const commentsEndpoint = Config.BASE_URL + '/api/v1/slices/' + post_id + '/comments';
    return this.http.get(commentsEndpoint);
  }
  getReactions(post_id : number) {
    const reactionsEndpoint = Config.BASE_URL + '/api/v1/slices/' + post_id + '/reactions';
    return this.http.get(reactionsEndpoint);
  }

  postCreatePost(taskID : string, caption : string, sliceImage : File){
    const formData = new FormData();
    formData.append('task_id', taskID);
    formData.append('free_text', caption);
    formData.append('slice_image', sliceImage);
    formData.append('handle', this.authService.getUserHandle());
    return this.http.post(Config.BASE_URL + '/api/v1/slices/new', formData)
  }
}