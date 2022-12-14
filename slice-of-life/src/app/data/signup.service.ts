import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Config } from '../config'

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  createUser(user: User) {
    return this.http.post(Config.BASE_URL + '/api/v1/users/account/new', {
      'handle' : user.handle,
      'email' : user.email,
      'password' : user.password,
      'first_name' : user.first_name,
      'last_name' : user.last_name
    });
}
}