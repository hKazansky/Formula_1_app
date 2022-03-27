import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CalendarComponent } from './home/calendar/calendar.component';
import { RaceDetailsComponent } from './home/calendar/details/race-details.component';
import { ConstructorsComponent } from './home/constructors/constructors.component';
import { DetailsComponent } from './home/drivers/details/details.component';
import { DriversComponent } from './home/drivers/drivers.component';
import { MainComponent } from './home/main/main.component';
import { RouteResolver } from './resolvers/route.resolver';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'

  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'race/details/:round',
    component: RaceDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'drivers',
    component: DriversComponent,
    canActivate: [AuthGuard],

  },
  {
    path: 'drivers/details/:driverId',
    component: DetailsComponent,
    resolve: {
      data: RouteResolver
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'constructors',
    component: ConstructorsComponent,
    canActivate: [AuthGuard]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteResolver]
})
export class AppRoutingModule { }
