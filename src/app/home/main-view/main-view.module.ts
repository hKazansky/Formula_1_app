import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainRouterModule } from './main-routing.module';
import { CalendarService } from 'src/app/services/calendar.service';
import { GoogleMapsService } from 'src/app/services/google-maps.service';
import { DateTimeFormatterService } from 'src/app/services/date-time-formatter.service';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRouterModule
  ],
  providers: [
    CalendarService,
    GoogleMapsService,
    DateTimeFormatterService,
  ],
  exports: [
    MainComponent
  ]
})
export class MainViewModule { }
