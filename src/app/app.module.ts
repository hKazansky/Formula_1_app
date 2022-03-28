import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { DriversComponent } from './home/drivers/drivers.component';
import { DriversService } from './services/drivers.service';
import { CalendarComponent } from './home/calendar/calendar.component';
import { DetailsComponent } from './home/drivers/details/details.component';
import { ConstructorsService } from './services/constructors.service';
import { ConstructorsComponent } from './home/constructors/constructors.component';
import { MainComponent } from './home/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { AuthGuard } from './guards/auth.guard';
import { RaceDetailsComponent } from './home/calendar/details/race-details.component';
import { PostService } from './services/post.service';
import { InterceptorService } from './services/interceptor.service';
import { ProfileComponent } from './home/profile/profile.component';
import { UserInformationComponent } from './home/profile/user-information/user-information.component';
import { MyPublicationsComponent } from './home/profile/my-publications/my-publications.component';
import { CreatePublicationComponent } from './home/profile/create-publication/create-publication.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    MainComponent,
    DriversComponent,
    CalendarComponent,
    DetailsComponent,
    ConstructorsComponent,
    RaceDetailsComponent,
    UserInformationComponent,
    MyPublicationsComponent,
    CreatePublicationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    DriversService,
    ConstructorsService,
    RegisterService,
    PostService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
