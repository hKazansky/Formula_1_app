import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarDetailsComponent } from './calendar/calendar-details/calendar-details.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarService } from 'src/app/services/calendar.service';
import { DateTimeFormatterService } from 'src/app/services/date-time-formatter.service';
import { LoaderModuleModule } from 'src/app/shared/loader-module/loader-module.module';



@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    LoaderModuleModule
  ],
  declarations: [
    CalendarComponent,
    CalendarDetailsComponent,
  ],
  providers: [
    CalendarService,
    DateTimeFormatterService
  ],
  exports: [
    CalendarComponent,
    CalendarDetailsComponent

  ]
})
export class CalendarViewModule { }
