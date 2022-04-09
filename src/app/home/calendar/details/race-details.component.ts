import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { ActivatedRoute } from '@angular/router'
import { IRace } from 'src/app/interfaces/race';
import { IStanding } from 'src/app/interfaces/standing';

@Component({
  selector: 'app-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {

  raceRound = '';
  details!: IRace[]
  raceStandings!: IStanding[]
  standings: any
  allRaces!: IRace[]
  race: any
  raceDetails: any

  constructor(private calendarService: CalendarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRace();
    this.getDriversStandings();
  }

  getRace(): void {
    this.raceRound = Object.values(this.activatedRoute.snapshot.params)[0]
    this.calendarService.filterRaceByRound().subscribe(data => {
      this.allRaces = data

      this.details = this.allRaces?.filter((race) => race.round === this.raceRound);
      this.raceDetails = this.details;

      this.raceDetails[0].time = timeZoneUpdate(this.raceDetails[0].time);
      this.raceDetails[0].Qualifying.time = timeZoneUpdate(this.raceDetails[0].Qualifying.time);
      this.raceDetails[0].FirstPractice.time = timeZoneUpdate(this.raceDetails[0].FirstPractice.time);
      this.raceDetails[0].SecondPractice.time = timeZoneUpdate(this.raceDetails[0].SecondPractice.time);
      this.raceDetails[0].ThirdPractice.time = timeZoneUpdate(this.raceDetails[0].ThirdPractice.time);

    })
  }

  getDriversStandings(): void {
    this.raceRound = Object.values(this.activatedRoute.snapshot.params)[0]
    // this.standings = data.MRData.StandingsTable.StandingsLists
    this.calendarService.getDriverStandingsByRace().subscribe((data) => {
      const races = Object.values(data);
      this.race = races.filter((race) => race.round === this.raceRound);
      this.standings = this.race[0].StandingsLists[0]?.DriverStandings

    });
  }

}

export function timeZoneUpdate(time: string) {
  const [h, m, s] = time?.split('Z')[0].split(':');
  let result;
  Number(h) > 9 ? result = `${Number(h) + 3}:${m}:${s}` : result = `0${Number(h) + 3}:${m}:${s}`
  Number(result.split(':')[0]) >= 24 ? result = `${(Number(h) + 3 - 24)}:${m}:${s}` : result
  return result
}