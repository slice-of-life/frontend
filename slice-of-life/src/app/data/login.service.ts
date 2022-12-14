import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(handle: string, password: string) {
    // Use the injected HttpClient to make a request to the login endpoint
    return this.http.post(Config.BASE_URL + '/api/v1/users/authenticate', { handle, password });
  }
}