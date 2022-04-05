import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { LoginService } from '../services/login.service';
import { RegisterService } from '../services/register.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private registerService: RegisterService, private router: Router) { }

  canActivate(): boolean {
    if (this.loginService.isLoggedIn() || this.registerService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
