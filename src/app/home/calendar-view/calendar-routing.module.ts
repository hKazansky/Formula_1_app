import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { CalendarDetailsComponent } from "./calendar/calendar-details/calendar-details.component";
import { CalendarComponent } from "./calendar/calendar.component";


const routes: Routes = [
    {
        path: '',
        component: CalendarComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'details/:round',
        component: CalendarDetailsComponent,
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CalendarRoutingModule { }