import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NonAuthGuard } from './guards/non-auth.guard';
import { AboutComponent } from './home/about/about.component';
import { WildcardComponent } from './home/wildcard/wildcard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'

  },
  {
    path: 'home',
    loadChildren: () => import('src/app/home/main-view/main-view.module').then(m => m.MainViewModule),
  },
  {
    path: 'calendar',
    loadChildren: () => import('src/app/home/calendar-view/calendar-view.module').then(m => m.CalendarViewModule),
    canLoad: [AuthGuard]

  },
  {
    path: 'drivers',
    loadChildren: () => import('src/app/home/drivers-view/drivers-view.module').then(m => m.DriversViewModule),
    canLoad: [AuthGuard]

  },
  {
    path: 'constructors',
    loadChildren: () => import('src/app/home/constructors-view/constructors-view.module').then(m => m.ConstructorsViewModule),
    canLoad: [AuthGuard]

  },
  {
    path: 'profile',
    loadChildren: () => import('src/app/home/profile-view/profile-view.module').then(m => m.ProfileViewModule),
    canLoad: [AuthGuard]

  },
  {
    path: 'forum',
    loadChildren: () => import('src/app/home/forum-view/forum-view.module').then(m => m.ForumViewModule),
    canLoad: [AuthGuard]

  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/home/auth-view/auth-view.module').then(m => m.AuthViewModule),
    canLoad: [NonAuthGuard]

  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: WildcardComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
