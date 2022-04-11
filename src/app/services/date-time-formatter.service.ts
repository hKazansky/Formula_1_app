import { Injectable } from '@angular/core';
// import { timeZoneUpdate } from '../home/calendar/details/race-details.component';

@Injectable({
  providedIn: 'root'
})
export class DateTimeFormatterService {

  constructor() { }

  dateTimeFormatter() {
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

    return sofiaDate.split('/')
  }

  getUpcomingRaceDateFormatter = (upcomingRace: any) => {
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
    let [year, month, date] = upcomingRace.date.split('-');
    let time = this.timeZoneUpdate(upcomingRace.time);
    let raceDate = `${months[month]} ${date}, ${year} ${time}`
    let countDownRaceDate = new Date(raceDate).getTime();

    return countDownRaceDate
  }

  timeZoneUpdate(time: string) {
    let result;
    const [h, m, s] = time?.split('Z')[0].split(':');

    Number(h) + 3 > 9 ? result = `${Number(h) + 3}:${m}:${s}` : result = `0${Number(h) + 3}:${m}:${s}`
    Number(result.split(':')[0]) >= 24 ? result = `0${(Number(h) + 3 - 24)}:${m}:${s}` : result

    return result
  }

}
