import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/home/profile-view/services/post.service';

@Component({
  selector: 'app-profile-create-publication',
  templateUrl: './profile-create-publication.component.html',
  styleUrls: ['./profile-create-publication.component.css']
})
export class ProfileCreatePublicationComponent {

  errors: string = '';

  constructor(private router: Router, private service: PostService) { }

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(250)]),
    imageUrl: new FormControl('', [Validators.required, Validators.pattern(/https?:\/\//)]),
  })

  onSubmitCreatePost() {
    if (this.form.value.description !== '' && this.form.value.imageUrl !== '' && this.form.value.title !== '') {
      if (this.form.status === 'INVALID') {
        return
      }
      this.service.createPost(this.form.value).subscribe(() => { }, (error) => {
        this.errors = error.error
      })
      this.router.navigate(['/profile/my-publications']);

    } else {
      this.errors = 'All fields are required!';
      setTimeout(() => {
        this.errors = ''
      }, 4000)
      return
    }

  }

}
