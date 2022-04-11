import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { ConstructorsComponent } from "./constructors/constructors.component";

const routes: Routes = [
    {
        path: '',
        component: ConstructorsComponent,
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConstructorsRoutingModule { }