import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NonAuthGuard } from "src/app/guards/non-auth.guard";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const root: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    }

]

@NgModule({
    imports: [RouterModule.forChild(root)],
    exports: [RouterModule]
})

export class AuthViewRoutingModule { }