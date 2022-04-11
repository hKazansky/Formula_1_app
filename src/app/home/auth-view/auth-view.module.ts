import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMiniNavComponent } from './auth-mini-nav/auth-mini-nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthViewRoutingModule } from './auth-view-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { LoginService } from 'src/app/services/login.service';



@NgModule({
  declarations: [
    AuthMiniNavComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthViewRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    RegisterService,
    LoginService
  ],
  exports: [
    AuthMiniNavComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthViewModule { }
