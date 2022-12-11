import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
const baseURL =
  'https://sliceoflife-webservice-d7uk9.ondigitalocean.app/api/v1/';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  createUser(user: User) {
    return this.http.post(baseURL + 'users/account/new', {
      'handle' : user.handle,
      'email' : user.email,
      'password' : user.password,
      'first_name' : user.first_name,
      'last_name' : user.last_name
    });
}
}