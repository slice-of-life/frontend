import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { User } from '../models/user.model';
import { Config } from '../config';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  createUser(user: User) {
    const formData = new FormData();
    formData.append('handle', user.handle);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('first_name', user.first_name);
    formData.append('last_name', user.last_name);
    const BASE_URL = isDevMode() ? Config.MOCK_BASE_URL : Config.BASE_URL;
    return this.http.post(BASE_URL + '/api/v1/users/account/new', formData);
  }
}