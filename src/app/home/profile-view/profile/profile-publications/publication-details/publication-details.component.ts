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
  comments!: IComments[];
  postComments!: IComments[];
  user = localStorage.getItem('userId');
  activeUser = localStorage.getItem('email');
  errors: string = '';

  constructor(private service: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentPost();
    this.getComments();
  }

  form = new FormGroup({
    comment: new FormControl('', [Validators.required]),
  });

  getCurrentPost() {
    this.postId = Object.values(this.route.snapshot.params)[0];
    this.service.getAllPublications().subscribe(data => {
      this.allPosts = data;
      this.currentPost = this.allPosts.filter(post => post._id === this.postId)[0];
    })
  }

  postComment() {
    this.postId = Object.values(this.route.snapshot.params)[0];

    if(this.form.get('comment')?.value == ''){
      this.errors = 'Input field must not be empty'
      return;
    }

    this.service.createComment(this.form.value, this.postId).subscribe();

    let inputField = (<HTMLInputElement>document.getElementById('comment-input'))
    inputField.value = '';

    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  getComments() {
    const postId = Object.values(this.route.snapshot.params)[0];

    this.service.getPublicationComments().subscribe(data => {
      this.comments = data;
      this.postComments = this.comments?.filter((x) => x?.post?._id === postId);
    });
  }

  deletePost() {
    const postId = Object.values(this.route.snapshot.params)[0];

    this.service.deletePost(postId).subscribe();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/profile/my-publications']));
  }

  deleteComment(commentId: any, postId: any, event: any) {
    this.service.deleteComment(commentId, postId).subscribe();

    const comment = event.target.parentElement.parentElement.parentElement.parentElement
    comment.remove();

    let currentUrl = this.router.url;

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  likeComment(commentId: string) {
    this.service.likeComment(commentId).subscribe();

    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  dislikeComment(commentId: string) {
    this.service.dislikeComment(commentId).subscribe();
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  isReacted(commentId: string) {
    const targetComment = this.comments?.find(x => x._id === commentId);
    const hasReacted = targetComment?.likes.some((x) => x === this.user) || targetComment?.dislikes.some((x) => x === this.user);

    return hasReacted
  }
}
