import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-my-publications',
  templateUrl: './my-publications.component.html',
  styleUrls: ['./my-publications.component.css']
})
export class MyPublicationsComponent implements OnInit {
  allUserPosts: any[] = [];
  userPosts: any[] = [];
  
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.getUserPosts()
  }

  getUserPosts() {
    this.service.getAllPublications().subscribe(data => {
      this.allUserPosts = data;
      this.userPosts = this.allUserPosts.filter(post => post.author?.email === localStorage.getItem('email'));
    })
  }
}
