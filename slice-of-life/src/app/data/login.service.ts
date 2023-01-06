import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Config } from '../config';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private authService : AuthService) {}
  login(handle: string, password: string) : Observable<any> {
    const formData = new FormData();
    formData.append('handle', handle);
    formData.append('password', password);
    return this.http.post(Config.BASE_URL + '/api/v1/users/authenticate', formData);
  }
  logOut() {
    this.authService.logOut();
  } 

}