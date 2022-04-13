import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { IDrivers } from '../interfaces/drivers';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private http: HttpClient) { };

  loadDrivers() {
    return this.http.get<IDrivers[]>(`http://localhost:3000/drivers`)

  }

  getDriverById(driverId: string) {
    return this.http.get<IDrivers>(`https://ergast.com/api/f1/drivers/${driverId}.json`);

  }
}
