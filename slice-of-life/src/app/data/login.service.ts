import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Config } from '../config';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private userLoggedIn : string;
  login(handle: string, password: string) {
    const formData = new FormData();
    formData.append('handle', handle);
    formData.append('password', password);
    return this.http.post(Config.BASE_URL + '/api/v1/users/authenticate', formData);
  }

  setUserHandle(handle : string) {
    localStorage.setItem('handle', handle);
  }
  private getUserHandle() : String | null {  
    return localStorage.getItem('handle');
  }

  getUserInfo() : Observable<any> {
    return this.http.get(`${Config.BASE_URL}/api/v1/users/${this.getUserHandle()}/profile`, { withCredentials : true})
  }
}