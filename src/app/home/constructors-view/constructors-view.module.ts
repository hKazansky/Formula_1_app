import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructorsComponent } from './constructors/constructors.component';
import { ConstructorsRoutingModule } from './constructors-routing.module';
import { ConstructorsService } from './services/constructors.service';
import { LoaderModuleModule } from 'src/app/shared/loader-module/loader-module.module';



@NgModule({
  declarations: [
    ConstructorsComponent
  ],
  imports: [
    CommonModule,
    ConstructorsRoutingModule,
    LoaderModuleModule
  ],
  providers: [
    ConstructorsService
  ],
  exports: [
    ConstructorsComponent
  ]
})
export class ConstructorsViewModule { }
