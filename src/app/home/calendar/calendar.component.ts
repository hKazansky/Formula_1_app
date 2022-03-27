import { Component, OnInit } from '@angular/core';
import { IRace } from 'src/app/interfaces/race';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendar: IRace[] | undefined;

  constructor(private service: CalendarService) { }

  ngOnInit(): void {
    this.loadRaces();
  }

  loadRaces(): any {
    this.service.loadRaceSchedule().subscribe((x) => this.calendar = x);
  }
}
