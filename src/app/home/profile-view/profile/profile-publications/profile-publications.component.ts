import { Component, OnInit } from '@angular/core';
import { IPosts } from 'src/app/interfaces/posts';
import { PostService } from 'src/app/home/profile-view/services/post.service';

@Component({
  selector: 'app-profile-publications',
  templateUrl: './profile-publications.component.html',
  styleUrls: ['./profile-publications.component.css']
})
export class ProfilePublicationsComponent implements OnInit {

  allUserPosts!: IPosts[]
  userPosts!: IPosts[]
  
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
