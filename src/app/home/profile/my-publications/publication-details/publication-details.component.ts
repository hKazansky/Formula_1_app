import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent implements OnInit {
  allPosts: any[] = [];
  currentPost: any;
  postId: string = '';

  constructor(private service: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCurrentPost();
  }

  getCurrentPost() {
    this.postId = Object.values(this.route.snapshot.params)[0];
    this.service.getAllPublications().subscribe(data => {
      this.allPosts = data;
      this.currentPost = this.allPosts.filter(post => post._id === this.postId)[0];
      console.log(this.currentPost)
    })
  }

}
