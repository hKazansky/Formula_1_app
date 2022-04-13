import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarDetailsComponent } from "./calendar/calendar-details/calendar-details.component";
import { CalendarComponent } from "./calendar/calendar.component";


const routes: Routes = [
    {
        path: '',
        component: CalendarComponent,
    },
    {
        path: 'details/:round',
        component: CalendarDetailsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CalendarRoutingModule { }