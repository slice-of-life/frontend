import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
  protectedRoutes = ['/profile']
  constructor(private authService : AuthService) {  }
  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    // Check to see if the route is protected 
    if(this.protectedRoutes.some((route) => request.url.includes(route))){
      if(!this.authService.isAuthValid()){
        return new Observable<HttpEvent<any>>();
      }
      request.clone({
        setHeaders: {
          'x-auth-token': this.authService.getJwt()
        }
      })
    }
    return next.handle(request);
  }
}