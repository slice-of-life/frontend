import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Config } from '../config';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

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

  setJwt(jwt : string) {
    localStorage.setItem('jwt', jwt);
  }
  private getJwt() : string | null {  
    return localStorage.getItem('jwt');
  }

  private getUserHandle() : string | null{
    if(this.getJwt()){
      try{
        const decoded = jwt_decode(this.getJwt())
        return decoded['handle'];
      }
      catch(error){
        console.log(error.message)
      }
    }
    return null;
  }

  getUserInfo() : Observable<any> {
    return this.http.get(`${environment.BASE_URL}/api/v1/users/${this.getUserHandle()}/profile`)
  }
}