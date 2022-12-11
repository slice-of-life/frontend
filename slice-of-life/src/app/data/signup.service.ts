import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseURL =
  'https://sliceoflife-webservice-d7uk9.ondigitalocean.app/api/v1/';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  createUser(handle: string, email: string, password: string, first_name: string, last_name: string) {
    return this.http.post(baseURL + 'users/account/new', {
      handle,
      email,
      password,
      first_name,
      last_name
    });
}
}