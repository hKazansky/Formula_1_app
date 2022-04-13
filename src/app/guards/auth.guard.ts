import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, } from '@angular/router';
import { LoginService } from '../services/login.service';
import { RegisterService } from '../services/register.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private loginService: LoginService, private registerService: RegisterService, private router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean {

    if (this.loginService.isLoggedIn() || this.registerService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }




}