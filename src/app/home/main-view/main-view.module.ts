import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainRouterModule } from './main-routing.module';
import { CalendarService } from 'src/app/services/calendar.service';
import { DateTimeFormatterService } from 'src/app/services/date-time-formatter.service';
import { GoogleMapsService } from './services/google-maps.service';
import { LoaderModuleModule } from 'src/app/shared/loader-module/loader-module.module';
import { RacePropertiesOverriderService } from 'src/app/services/race-properties-overrider.service';



@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRouterModule,
    LoaderModuleModule
  ],
  providers: [
    CalendarService,
    GoogleMapsService,
    DateTimeFormatterService,
    RacePropertiesOverriderService
  ],
  exports: [
    MainComponent
  ]
})
export class MainViewModule { }
