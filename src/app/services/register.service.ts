import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post<any>('http://localhost:3000/register', user)
  }

  isLoggedIn() {
    return Boolean(localStorage.getItem('token'));
  }
}
