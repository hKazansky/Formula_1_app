import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { ProfileCreatePublicationComponent } from "./profile/profile-create-publication/profile-create-publication.component";
import { EditProfileInformationComponent } from "./profile/profile-information/edit-profile-information/edit-profile-information.component";
import { ProfileInformationComponent } from "./profile/profile-information/profile-information.component";
import { ProfilePublicationsComponent } from "./profile/profile-publications/profile-publications.component";
import { PublicationDetailsComponent } from "./profile/profile-publications/publication-details/publication-details.component";
import { PublicationEditComponent } from "./profile/profile-publications/publication-edit/publication-edit.component";
import { ProfileComponent } from "./profile/profile.component";

const root: Routes = [
    {
        path: '',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'my-account',
        component: ProfileInformationComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'my-account/edit',
        component: EditProfileInformationComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'my-publications',
        component: ProfilePublicationsComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'my-publications/:publicationId',
        component: PublicationDetailsComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'my-publications/:publicationId/edit',
        component: PublicationEditComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'create-publication',
        component: ProfileCreatePublicationComponent,
        canActivate: [AuthGuard]

    }
]


@NgModule({
    imports: [RouterModule.forChild(root)],
    exports: [RouterModule]
})


export class ProfileRoutingModule { }