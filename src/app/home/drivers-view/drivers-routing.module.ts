import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DriversDetailsComponent } from "./drivers/drivers-details/drivers-details.component";
import { DriversComponent } from "./drivers/drivers.component";

const root: Routes = [
    {
        path: '',
        component: DriversComponent,
    },
    {
        path: 'details/:round',
        component: DriversDetailsComponent,
    },
]


@NgModule({
    imports: [RouterModule.forChild(root)],
    exports: [RouterModule]
})

export class DriversRoutingModule { }