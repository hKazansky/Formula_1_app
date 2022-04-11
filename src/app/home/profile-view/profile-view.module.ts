import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileInformationComponent } from './profile/profile-information/profile-information.component';
import { EditProfileInformationComponent } from './profile/profile-information/edit-profile-information/edit-profile-information.component';
import { ProfilePublicationsComponent } from './profile/profile-publications/profile-publications.component';
import { PublicationEditComponent } from './profile/profile-publications/publication-edit/publication-edit.component';
import { PublicationDetailsComponent } from './profile/profile-publications/publication-details/publication-details.component';
import { ProfileCreatePublicationComponent } from './profile/profile-create-publication/profile-create-publication.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileInformationComponent,
    EditProfileInformationComponent,
    ProfilePublicationsComponent,
    PublicationEditComponent,
    PublicationDetailsComponent,
    ProfileCreatePublicationComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    PostService,
  ],
  exports: [
    ProfileComponent,
    ProfileInformationComponent,
    EditProfileInformationComponent,
    ProfilePublicationsComponent,
    PublicationEditComponent,
    PublicationDetailsComponent,
    ProfileCreatePublicationComponent
  ]
})
export class ProfileViewModule { }
