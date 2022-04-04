import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { IRace } from 'src/app/interfaces/race';
import { CalendarService } from 'src/app/services/calendar.service';
import { timeZoneUpdate } from '../calendar/details/race-details.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'google-maps';

  calendar: IRace[] | undefined;
  nextRace: any[] | undefined = [];
  
  currentDate: string[] = [];
  firstDates: any = [];
  secondDates: any = [];
  dateAsNumber: number = 0;
  currDateAsStr = '';
  today = ''
  todayAsNumber = 0;
  allRaceDatesAsNumbers = []
  result: any;
  nextRaceFiltered: any;
  nextRaceFilteredToString: any
  day: any
  year: any
  month: any
  yearDayMonth: any
  final: any
  nextRaceId: any
  race: IRace | undefined
  dataIsLoaded: boolean = false

  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;

  constructor(private service: CalendarService) { }

  ngOnInit(): void {
    this.loadNextRace();

  }

  googleMapsInit(final: any) {
    let loader = new Loader({
      apiKey: 'AIzaSyB2hyVwH1DR-3C39ThPNAURhPJQOR0sAO0',

    });
    loader.load().then(() => {
      let target = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: {
          lat: Number(final?.Circuit.Location.lat),
          lng: Number(final?.Circuit.Location.long),
        },
        zoom: 8
      })

      new google.maps.Marker({
        position: {
          lat: Number(final?.Circuit.Location.lat),
          lng: Number(final?.Circuit.Location.long),
        },
        map: target,
      })
    })
  }

  loadNextRace(): void {
    const options: object = {
      timeZone: 'Europe/Sofia',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }
    let formatter = new Intl.DateTimeFormat([], options);
    let sofiaDate: string = formatter.format(new Date()).split(',')[0];
    let [month, date, year] = sofiaDate.split('/');

    this.service.loadRaceSchedule().subscribe((data) => {
      this.calendar = data
      this.calendar?.forEach(x => this.nextRace?.push(x.date.split('-').join('/')));

      this.today = `${year}/${+month < 10 ? `0${month}` : `${month}`}/${+date < 10 ? `0${date}` : `${date}`}`
      this.todayAsNumber = +this.today.split('/').join('');

      this.nextRace?.forEach(x => this.secondDates.push(x.split('/').join('')));

      this.allRaceDatesAsNumbers = this.secondDates.map(Number);
      this.result = this.allRaceDatesAsNumbers.find(x => x > this.todayAsNumber);
      this.nextRaceFiltered = this.allRaceDatesAsNumbers.filter(x => this.result == x);
      this.nextRaceFilteredToString = this.nextRaceFiltered.toString().split('');

      this.year = this.nextRaceFilteredToString.slice(0, 4);
      this.month = this.nextRaceFilteredToString.slice(4, 6);
      this.day = this.nextRaceFilteredToString.slice(6);

      this.yearDayMonth = `${this.year.join('')}/${this.month.join('')}/${this.day.join('')}`

      this.final = this.calendar?.filter(x => x.date.split('-').join('/') === this.yearDayMonth)[0];

      this.final.time = timeZoneUpdate(this.final.time);
      this.final.Qualifying.time = timeZoneUpdate(this.final.Qualifying.time);
      this.final.ThirdPractice.time = timeZoneUpdate(this.final.ThirdPractice.time);
      this.final.SecondPractice.time = timeZoneUpdate(this.final.SecondPractice.time);
      this.final.FirstPractice.time = timeZoneUpdate(this.final.FirstPractice.time);

      this.googleMapsInit(this.final);


      const countDownClock = () => {
        let months: any = {
          '01': 'Jan',
          '02': 'Feb',
          '03': 'Mar',
          '04': 'Apr',
          '05': 'May',
          '06': 'Jun',
          '07': 'Jul',
          '08': 'Aug',
          '09': 'Sep',
          '10': 'Oct',
          '11': 'Nov',
          '12': 'Dec',
        }
        let [year, month, date] = this.final?.date?.split('-');
        let time = timeZoneUpdate(this.final?.time);
        let raceDate = `${months[month]} ${date}, ${year} ${time}`
        let countDownRaceDate = new Date(raceDate).getTime();

        setInterval(() => {
          let dateNow = new Date().getTime();
          let distance = countDownRaceDate - dateNow;

          this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((distance % (1000 * 60)) / 1000);


        }, 1000);

      }
      countDownClock();
    })

  }
}

