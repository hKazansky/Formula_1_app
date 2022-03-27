import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IConstructors } from '../interfaces/constructors';


@Injectable({
  providedIn: 'root'
})
export class ConstructorsService {

  constructor(private http: HttpClient) { }

  loadConstructors() {
    return this.http.get<any>('http://localhost:3000/constructors')
  }
}
