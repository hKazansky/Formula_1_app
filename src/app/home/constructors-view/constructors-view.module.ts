import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructorsComponent } from './constructors/constructors.component';
import { ConstructorsRoutingModule } from './constructors-routing.module';
import { ConstructorsService } from './services/constructors.service';



@NgModule({
  declarations: [
    ConstructorsComponent
  ],
  imports: [
    CommonModule,
    ConstructorsRoutingModule
  ],
  providers: [
    ConstructorsService
  ],
  exports: [
    ConstructorsComponent
  ]
})
export class ConstructorsViewModule { }
