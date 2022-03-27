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
  raceDetails: IRace[] | undefined
  raceStandings: IStanding[] | undefined
  standings: any
  allRaces: IRace[] | undefined
  race: any

  constructor(private calendarService: CalendarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRace();
    this.getDriversStandings();
  }

  // getRace(): void {
  //   this.raceRound = Object.values(this.activatedRoute.snapshot.params)[0]
  //   this.calendarService.getRaceById(this.raceRound).subscribe(data => this.raceDetails = data.MRData.RaceTable.Races);

  // }

  getRace(): void {
    this.raceRound = Object.values(this.activatedRoute.snapshot.params)[0]
    this.calendarService.filterRaceByRound().subscribe(data => {
      this.allRaces = data

      this.raceDetails = this.allRaces?.filter((race) => race.round === this.raceRound);
      // console.log(this.raceDetails)
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
