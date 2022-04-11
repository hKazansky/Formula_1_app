import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";

const root: Routes = [
    {
        path: '',
        component: MainComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(root)],
    exports: [RouterModule]
})

export class MainRouterModule { }