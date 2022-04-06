import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  loginUser(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/login', user).pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    return throwError(error || 'Server error')
  }

  isLoggedIn() {
    return Boolean(localStorage.getItem('token'));
  }

}
