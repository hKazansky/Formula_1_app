import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers/drivers.component';
import { DriversRoutingModule } from './drivers-routing.module';
import { DriversDetailsComponent } from './drivers/drivers-details/drivers-details.component';
import { DriversService } from 'src/app/services/drivers.service';



@NgModule({
  declarations: [
    DriversComponent,
    DriversDetailsComponent,
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
  ],
  providers: [
    DriversService,
  ],
  exports: [
    DriversComponent,
    DriversDetailsComponent,

  ]
})
export class DriversViewModule { }
