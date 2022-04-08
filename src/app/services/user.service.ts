import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>('http://localhost:3000/users')
  }

  getUserById() {
    return this.http.get<IUser>(`http://localhost:3000/user/:userId`)
  }

  editUserInformation(userData: object) {
    return this.http.put<IUser>(`http://localhost:3000/user/:userId/edit`, userData)
  }

}
