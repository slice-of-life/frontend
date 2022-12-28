import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    // Check if there is a JWT in local storage
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      // If there is a JWT, attach it to the header of the request
      request = request.clone({
        setHeaders: {
          'x-auth-token': jwt
        }
      });
    }
    return next.handle(request);
  }
}