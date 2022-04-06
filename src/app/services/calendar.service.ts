import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRaces } from '../interfaces/races';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }

  loadRaceSchedule() {
    return this.http.get<any>('http://localhost:3000/races');
  }

  filterRaceByRound() {
    return this.http.get<any>('http://localhost:3000/races');
  }

  loadNextRace(circuitId: string) {
    return this.http.get<IRaces>(`http://ergast.com/api/f1/2022/${circuitId}.json`)
  }

  getDriverStandingsByRace() {
    return this.http.get(`http://localhost:3000/races/by-round`)
  }
}
