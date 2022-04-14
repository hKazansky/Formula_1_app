import { Injectable } from '@angular/core';
import { DateTimeFormatterService } from 'src/app/services/date-time-formatter.service';

@Injectable({
  providedIn: 'root'
})
export class RacePropertiesOverriderService {

  constructor(private dateTimeFormatter: DateTimeFormatterService) { }

  racePropertiesOverrider(raceData: any) {

    raceData.time = this.dateTimeFormatter.timeZoneUpdate(raceData.time);
    raceData.Qualifying.time = this.dateTimeFormatter.timeZoneUpdate(raceData.Qualifying.time);
    raceData.FirstPractice.time = this.dateTimeFormatter.timeZoneUpdate(raceData.FirstPractice.time);
    raceData.SecondPractice.time = this.dateTimeFormatter.timeZoneUpdate(raceData.SecondPractice.time);
    raceData.ThirdPractice
      ? raceData.ThirdPractice.time = this.dateTimeFormatter.timeZoneUpdate(raceData.ThirdPractice.time)
      : raceData.Sprint.time = this.dateTimeFormatter.timeZoneUpdate(raceData.Sprint.time)
  }
}
