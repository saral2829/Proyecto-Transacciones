import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('paso por el interceptor');
    const token = sessionStorage.getItem('token');
    if (token) {
      const authReq = request.clone({
        headers: request.headers.set('Athorization', `Token token=${token}`),
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
