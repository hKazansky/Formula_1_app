import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { fade, transitDates, transitTimes, transitTitles } from 'src/app/animations';
import { IRace } from 'src/app/interfaces/race';
import { CalendarService } from 'src/app/services/calendar.service';
import { DateTimeFormatterService } from 'src/app/services/date-time-formatter.service';
import { GoogleMapsService } from 'src/app/services/google-maps.service';
import { RacePropertiesOverriderService } from 'src/app/services/race-properties-overrider.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fade, transitTitles, transitDates, transitTimes,]
})
export class MainComponent implements OnInit, OnDestroy {
  nextRaceLoader!: Subscription;

  calendar!: IRace[];
  nextRace: string[] = [];
  currentDate: string[] = [];
  upcomingRaceDate: any;
  upcomingRace!: IRace

  today: string = ''
  todayAsNumber: number = 0;

  day!: string[]
  year!: string[]
  month!: string[]
  yearDayMonthOfUpcomingRace: string = ''

  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;

  sprintOrPractice: string = ''

  constructor(private service: CalendarService, private racePropertiesOverrider: RacePropertiesOverriderService, private googleMapsService: GoogleMapsService, private dateTimeFormatter: DateTimeFormatterService) { }

  ngOnInit(): void {
    this.loadNextRace();
  }

  loadNextRace(): void {
    let [month, date, year] = this.dateTimeFormatter.dateTimeFormatter();

    this.nextRaceLoader = this.service.loadRaceSchedule().subscribe((data) => {
      this.calendar = data;
      this.calendar?.forEach(race => this.nextRace?.push(race.date.split('-').join('/')));

      this.today = `${year}/${+month < 10 ? `0${month}` : `${month}`}/${+date < 10 ? `0${date}` : `${date}`}`
      this.todayAsNumber = +this.today.split('/').join('');

      this.upcomingRaceDate = this.nextRace
        .map(date => Number(date.split('/').join('')))
        .find(raceDateAsNumber => raceDateAsNumber > this.todayAsNumber)
        ?.toString()
        .split('');

      this.year = this.upcomingRaceDate.slice(0, 4);
      this.month = this.upcomingRaceDate.slice(4, 6);
      this.day = this.upcomingRaceDate.slice(6);

      this.yearDayMonthOfUpcomingRace = `${this.year.join('')}/${this.month.join('')}/${this.day.join('')}`
      this.upcomingRace = this.calendar?.filter(race => race.date.split('-').join('/') === this.yearDayMonthOfUpcomingRace)[0];

      this.upcomingRace.ThirdPractice ? this.sprintOrPractice = 'PRACTICE 3' : this.sprintOrPractice = 'SPRINT'

      this.racePropertiesOverrider.racePropertiesOverrider(this.upcomingRace);

      this.googleMapsService.googleMapsInit(this.upcomingRace);

      setInterval(() => {
        let countDownRaceDate = this.dateTimeFormatter.getUpcomingRaceDateFormatter(this.upcomingRace);

        let dateNow = new Date().getTime();
        let distance = countDownRaceDate - dateNow;

        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      }, 1000);
    })
  }

  ngOnDestroy(): void {
    setTimeout(() => {

      this.nextRaceLoader.unsubscribe();
    }, 1000)
  }

}
