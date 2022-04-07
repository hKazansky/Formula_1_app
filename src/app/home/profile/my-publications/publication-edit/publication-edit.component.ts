import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-publication-edit',
  templateUrl: './publication-edit.component.html',
  styleUrls: ['./publication-edit.component.css']
})
export class PublicationEditComponent implements OnInit {
  post: any;
  errors: string = '';

  constructor(private router: Router, private service: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCurrentPostDetails();
  }

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(20),Validators.maxLength(250)]),
    imageUrl: new FormControl('', [Validators.required, Validators.pattern(/https?:\/\//)]),
  });

  getCurrentPostDetails() {
    const postId = Object.values(this.route.snapshot.params)[0];
    this.service.getPostById(postId).subscribe(data => {
      this.post = data
      console.log(this.post)
    });

  }

  onSubmitEditPost() {
    if(this.form.value.title !== '' && this.form.value.description !== '' && this.form.value.imageUrl !== ''){

      const postId = Object.values(this.route.snapshot.params)[0];
      const body = this.form.value;
  
      this.service.editPost(postId, body).subscribe();
  
      this.router.navigate([`/profile/my-publications/${postId}`]);
    }else{
      this.errors = 'All fields are required';
      return;
    }
  }

}
