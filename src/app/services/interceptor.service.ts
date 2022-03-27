import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthService)
    // return next.handle(req);
    let token = authService.getToken();
    if (token) {

      let tokenizedReq = req.clone({
        // setHeaders: {

        //   'Authorization': `Bearer ${authService.getToken()}`,
        //   // "Access-Control-Allow-Headers"
        // }
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(tokenizedReq)
    } else {
      return next.handle(req);
    }
  }
}

