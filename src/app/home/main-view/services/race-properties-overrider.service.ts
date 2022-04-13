import { Injectable } from '@angular/core';
import { DateTimeFormatterService } from 'src/app/services/date-time-formatter.service';

@Injectable({
  providedIn: 'root'
})
export class RacePropertiesOverriderService {

  constructor(private dateTimeFormatter: DateTimeFormatterService) { }

  racePropertiesOverrider(upcomingRace: any) {

    upcomingRace.time = this.dateTimeFormatter.timeZoneUpdate(upcomingRace.time);
    upcomingRace.Qualifying.time = this.dateTimeFormatter.timeZoneUpdate(upcomingRace.Qualifying.time);
    upcomingRace.FirstPractice.time = this.dateTimeFormatter.timeZoneUpdate(upcomingRace.FirstPractice.time);
    upcomingRace.SecondPractice.time = this.dateTimeFormatter.timeZoneUpdate(upcomingRace.SecondPractice.time);
    upcomingRace.ThirdPractice
      ? upcomingRace.ThirdPractice.time = this.dateTimeFormatter.timeZoneUpdate(upcomingRace.ThirdPractice.time)
      : upcomingRace.Sprint.time = this.dateTimeFormatter.timeZoneUpdate(upcomingRace.Sprint.time)
  }
}
