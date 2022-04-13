import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanLoad {
  constructor(private router: Router) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (localStorage.getItem('token') === null) {
      return true
    } else {
      this.router.navigate(['/']);
      return false
    }
  }

}
