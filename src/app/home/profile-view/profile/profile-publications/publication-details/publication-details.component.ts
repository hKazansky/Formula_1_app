import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IComments } from 'src/app/interfaces/comments';
import { IPosts } from 'src/app/interfaces/posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent implements OnInit {

  allPosts!: IPosts[];
  currentPost!: IPosts;
  postId: string = '';
  activeUser = localStorage.getItem('email');

  constructor(private service: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentPost();
  }


  getCurrentPost(): void {
    this.postId = Object.values(this.route.snapshot.params)[0];
    this.service.getAllPublications().subscribe(data => {
      this.allPosts = data;
      this.currentPost = this.allPosts.filter(post => post._id === this.postId)[0];
    })
  }

  deletePost(): void {
    const postId = Object.values(this.route.snapshot.params)[0];

    this.service.deletePost(postId).subscribe();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/profile/my-publications']));
  }


}
