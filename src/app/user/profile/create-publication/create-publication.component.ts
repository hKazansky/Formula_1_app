import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from './../../../services/post.service'
@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent {

  constructor(private router: Router, private service: PostService) { }

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(20)])
  })

  onSubmitCreatePost() {
    this.service.createPost(this.form.value).subscribe()
    this.router.navigate(['/'])

  }

}
