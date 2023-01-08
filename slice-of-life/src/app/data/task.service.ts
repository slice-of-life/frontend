import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient, private authService : AuthService) { }

  getTask() {
    return this.http.get(`${environment.BASE_URL}/api/v1/users/${this.authService.getUserHandle()}/tasklist`);
  }
}
