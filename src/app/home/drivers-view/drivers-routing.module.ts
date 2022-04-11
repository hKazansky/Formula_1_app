import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { DriversDetailsComponent } from "./drivers/drivers-details/drivers-details.component";
import { DriversComponent } from "./drivers/drivers.component";

const root: Routes = [
    {
        path: '',
        component: DriversComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'details/:round',
        component: DriversDetailsComponent,
        canActivate: [AuthGuard]
    },
]


@NgModule({
    imports: [RouterModule.forChild(root)],
    exports: [RouterModule]
})

export class DriversRoutingModule { }