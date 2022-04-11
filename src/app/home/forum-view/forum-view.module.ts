import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum/forum.component';
import { ForumRouterModule } from './forum-router.module';
import { PostService } from 'src/app/services/post.service';



@NgModule({
  declarations: [
    ForumComponent
  ],
  imports: [
    CommonModule,
    ForumRouterModule
  ],
  providers: [
    PostService
  ],
  exports: [
    ForumComponent
  ]
})
export class ForumViewModule { }
