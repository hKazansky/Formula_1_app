import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum/forum.component';
import { ForumRouterModule } from './forum-router.module';
import { PostService } from '../profile-view/services/post.service';
import { LoaderModuleModule } from 'src/app/shared/loader-module/loader-module.module';

@NgModule({
  declarations: [
    ForumComponent,
  ],
  imports: [
    CommonModule,
    ForumRouterModule,
    LoaderModuleModule
  ],
  providers: [
    PostService
  ],
  exports: [
    ForumComponent
  ]
})
export class ForumViewModule { }
