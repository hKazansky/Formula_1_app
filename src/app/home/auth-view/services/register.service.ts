import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/register', user).pipe(catchError(this.handleError))
  }

  handleError(error: any) {
    return throwError(error || 'Server error')
  }

  isLoggedIn() {
    return Boolean(localStorage.getItem('token'));
  }
}
