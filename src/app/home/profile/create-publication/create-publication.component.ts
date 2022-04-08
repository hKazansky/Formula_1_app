import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../../services/post.service'
@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent {
  errors: string = '';

  constructor(private router: Router, private service: PostService) { }

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(250)]),
    imageUrl: new FormControl('', [Validators.required, Validators.pattern(/https?:\/\//)]),
  })

  onSubmitCreatePost() {


    if (this.form.value.description !== '' && this.form.value.imageUrl !== '' && this.form.value.title !== '') {
      this.service.createPost(this.form.value).subscribe(() => { }, (error) => {
        this.errors = error.error
      })
      this.router.navigate(['/profile/my-publications'])
    } else {
      this.errors = 'All fields are required!';
      setTimeout(() => {
        this.errors = ''
      }, 4000)
      return
    }

  }

}
