import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers/drivers.component';
import { DriversRoutingModule } from './drivers-routing.module';
import { DriversDetailsComponent } from './drivers/drivers-details/drivers-details.component';
import { DriversService } from './services/drivers.service';
import { LoaderModuleModule } from 'src/app/shared/loader-module/loader-module.module';



@NgModule({
  declarations: [
    DriversComponent,
    DriversDetailsComponent,
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    LoaderModuleModule
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
