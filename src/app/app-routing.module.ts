import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    loadChildren: () => import('src/app/home/main-view/main-view.module').then(m => m.MainViewModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('src/app/home/calendar-view/calendar-view.module').then(m => m.CalendarViewModule)
  },
  {
    path: 'drivers',
    loadChildren: () => import('src/app/home/drivers-view/drivers-view.module').then(m => m.DriversViewModule)
  },
  {
    path: 'constructors',
    loadChildren: () => import('src/app/home/constructors-view/constructors-view.module').then(m => m.ConstructorsViewModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('src/app/home/profile-view/profile-view.module').then(m => m.ProfileViewModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('src/app/home/forum-view/forum-view.module').then(m => m.ForumViewModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/home/auth-view/auth-view.module').then(m => m.AuthViewModule)
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
