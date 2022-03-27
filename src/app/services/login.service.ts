import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  loginUser(user: any) {
    return this.http.post<any>('http://localhost:3000/login', user);
  }

  isLoggedIn() {
    return Boolean(localStorage.getItem('token'));
  }
}
