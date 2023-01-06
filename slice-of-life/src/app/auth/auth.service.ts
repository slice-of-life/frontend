import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  setJwt(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }
  getJwt(): string | null {
    return localStorage.getItem('jwt');
  }

  isAuthValid(): boolean {
    if (this.getJwt()) {
      const decoded = jwt_decode(this.getJwt());
      const expireDate = decoded['exp'];
      const currentTime = Date.now() / 1000;
      return currentTime < expireDate;
    }
    return false;
  }

  getUserHandle(): string | null {
    if (this.getJwt()) {
      try {
        const decoded = jwt_decode(this.getJwt());
        return decoded['handle'];
      } catch (error) {
        console.log(error.message);
      }
    }
    return null;
  }
  logOut() {
    localStorage.removeItem('jwt');
  }
}
