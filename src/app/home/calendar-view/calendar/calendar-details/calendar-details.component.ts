import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IRace } from 'src/app/interfaces/race';
import { IStanding } from 'src/app/interfaces/standing';
import { CalendarService } from 'src/app/services/calendar.service';
import { DateTimeFormatterService } from 'src/app/services/date-time-formatter.service';

@Component({
  selector: 'app-calendar-details',
  templateUrl: './calendar-details.component.html',
  styleUrls: ['./calendar-details.component.css']
})
export class CalendarDetailsComponent implements OnInit {

  getAllRaces!: Subscription
  raceRound = '';
  details!: IRace[]
  raceStandings!: IStanding[]
  standings: any
  allRaces!: IRace[]
  race: any
  raceDetails: any
  sprintOrPractice: string = '';


  constructor(private calendarService: CalendarService, private activatedRoute: ActivatedRoute, private dateTimeFormatter: DateTimeFormatterService) { }

  ngOnInit(): void {
    this.getRace();
    this.getDriversStandings();
  }

  getRace(): void {
    this.raceRound = Object.values(this.activatedRoute.snapshot.params)[0]
    this.getAllRaces = this.calendarService.loadRaceSchedule().subscribe(data => {
      this.allRaces = data

      this.details = this.allRaces?.filter((race) => race.round === this.raceRound);
      this.raceDetails = this.details;

      this.raceDetails[0].time = this.dateTimeFormatter.timeZoneUpdate(this.raceDetails[0].time);
      this.raceDetails[0].Qualifying.time = this.dateTimeFormatter.timeZoneUpdate(this.raceDetails[0].Qualifying.time);
      this.raceDetails[0].FirstPractice.time = this.dateTimeFormatter.timeZoneUpdate(this.raceDetails[0].FirstPractice.time);
      this.raceDetails[0].SecondPractice.time = this.dateTimeFormatter.timeZoneUpdate(this.raceDetails[0].SecondPractice.time);
      this.raceDetails[0].ThirdPractice
        ? this.raceDetails[0].ThirdPractice.time = this.dateTimeFormatter.timeZoneUpdate(this.raceDetails[0].ThirdPractice.time)
        : this.raceDetails[0].Sprint.time = this.dateTimeFormatter.timeZoneUpdate(this.raceDetails[0].Sprint.time)

      this.raceDetails[0].ThirdPractice ? this.sprintOrPractice = 'PRACTICE 3' : this.sprintOrPractice = 'SPRINT'

    })
  }

  getDriversStandings(): void {
    this.raceRound = Object.values(this.activatedRoute.snapshot.params)[0];

    this.calendarService.getDriverStandingsByRace().subscribe((data) => {
      const races = Object.values(data);
      this.race = races.filter((race) => race.RaceTable.round === this.raceRound);
      // console.log(this.race[0].RaceTable.Races[0].Results);

      this.standings = this.race[0]?.RaceTable.Races[0]?.Results

    });
  }

  ngOnDestroy(): void {
    this.getAllRaces.unsubscribe();
  }

}
