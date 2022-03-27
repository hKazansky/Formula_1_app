import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-my-publications',
  templateUrl: './my-publications.component.html',
  styleUrls: ['./my-publications.component.css']
})
export class MyPublicationsComponent implements OnInit {

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.userPosts()
  }


  userPosts(){
    this.service.getUserPosts().subscribe(data => console.log(data))
  }


}
