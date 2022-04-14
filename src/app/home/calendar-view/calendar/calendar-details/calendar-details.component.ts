import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IRace } from 'src/app/interfaces/race';
import { IStanding } from 'src/app/interfaces/standing';
import { CalendarService } from 'src/app/services/calendar.service';
import { RacePropertiesOverriderService } from 'src/app/services/race-properties-overrider.service';

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
  raceDetails!: IRace
  sprintOrPractice: string = '';


  constructor(private calendarService: CalendarService, private activatedRoute: ActivatedRoute, private racePropertiesOverrider: RacePropertiesOverriderService) { }

  ngOnInit(): void {
    this.getRace();
    this.getDriversStandings();
  }

  getRace(): void {
    this.raceRound = Object.values(this.activatedRoute.snapshot.params)[0]
    this.getAllRaces = this.calendarService.loadRaceSchedule().subscribe(data => {
      this.allRaces = data;
      this.raceDetails = this.allRaces?.filter((race) => race.round === this.raceRound)[0];

      this.racePropertiesOverrider.racePropertiesOverrider(this.raceDetails)
    })
  }

  getDriversStandings(): void {
    this.raceRound = Object.values(this.activatedRoute.snapshot.params)[0];

    this.calendarService.getDriverStandingsByRace().subscribe((data) => {
      const races = Object.values(data);
      this.race = races.filter((race) => race.RaceTable.round === this.raceRound);

      this.standings = this.race[0]?.RaceTable.Races[0]?.Results

    });
  }

  ngOnDestroy(): void {
    this.getAllRaces.unsubscribe();
  }

}
