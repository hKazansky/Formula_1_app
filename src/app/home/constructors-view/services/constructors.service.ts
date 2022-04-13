import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IConstructors } from 'src/app/interfaces/constructors';


@Injectable({
  providedIn: 'root'
})
export class ConstructorsService {

  constructor(private http: HttpClient) { }

  loadConstructors() {
    return this.http.get<IConstructors[]>('http://localhost:3000/constructors')
  }
}
