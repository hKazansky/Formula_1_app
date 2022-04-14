import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/home/profile-view/services/post.service';

@Component({
  selector: 'app-publication-edit',
  templateUrl: './publication-edit.component.html',
  styleUrls: ['./publication-edit.component.css']
})
export class PublicationEditComponent implements OnInit {

  getCurrentPost!: Subscription;

  post: any;
  errors: string = '';

  constructor(private router: Router, private service: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCurrentPostDetails();
  }

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(250)]),
    imageUrl: new FormControl('', [Validators.required, Validators.pattern(/https?:\/\//)]),
  });

  getCurrentPostDetails(): void {
    const postId = Object.values(this.route.snapshot.params)[0];
    this.getCurrentPost = this.service.getPostById(postId).subscribe(data => {
      this.post = data
    });

  }

  onSubmitEditPost(): void {
    if (this.form.value.title !== '' && this.form.value.description !== '' && this.form.value.imageUrl !== '') {
      if (this.form.status === 'INVALID') {
        return
      }
      const postId = Object.values(this.route.snapshot.params)[0];
      const body = this.form.value;

      this.service.editPost(postId, body).subscribe(() => { }, (error) => {
        this.errors = error.error
      });

      this.router.navigate([`/profile/my-publications/${postId}`]);
    } else {
      this.errors = 'All fields are required';
      setTimeout(() => {
        this.errors = '';
      }, 4000)
      return;
    }
  }

  ngOnDestroy(): void {
    this.getCurrentPost.unsubscribe();
  }

}
