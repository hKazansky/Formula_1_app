import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.onSubmitCreatePost()
  }
  
  form = new FormGroup({
    'title': new FormControl('', [Validators.required]),
    'description': new FormControl('', [Validators.required]),
   
  })
  
  onSubmitCreatePost() {
    this.postService.createPost(this.form.value).subscribe(data => console.log(data))
  }

}
