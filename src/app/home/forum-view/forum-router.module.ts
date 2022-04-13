import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicationDetailsComponent } from "../profile-view/profile/profile-publications/publication-details/publication-details.component";
import { ForumComponent } from "./forum/forum.component";

const root: Routes = [
    {
        path: '',
        component: ForumComponent,
    },
    {
        path: 'publications/:publicationId',
        component: PublicationDetailsComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(root)],
    exports: [RouterModule]
})

export class ForumRouterModule { }