import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(handle: string, password: string) {
    // Use the injected HttpClient to make a request to the login endpoint
    return this.http.post('/api/login', { handle, password });
  }
}