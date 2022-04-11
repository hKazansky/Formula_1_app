import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { fade } from "src/app/animations";
import { IRace } from "src/app/interfaces/race";
import { CalendarService } from "src/app/services/calendar.service";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  animations: [
    fade
  ]
})
export class CalendarComponent implements OnInit, OnDestroy {
  getRaces!: Subscription
  calendar!: IRace[];

  constructor(private service: CalendarService) { }

  ngOnInit(): void {
    this.loadRaces();
  }

  loadRaces(): any {
    this.getRaces = this.service.loadRaceSchedule().subscribe((races) => this.calendar = races);

  }

  ngOnDestroy(): void {
    this.getRaces.unsubscribe();
  }
}
