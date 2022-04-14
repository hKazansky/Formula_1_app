import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IComments } from 'src/app/interfaces/comments';
import { CommentsService } from '../../../services/comments.service';

@Component({
  selector: 'app-publication-comments',
  templateUrl: './publication-comments.component.html',
  styleUrls: ['./publication-comments.component.css']
})
export class PublicationCommentsComponent implements OnInit {
  errors: string = '';
  comments!: IComments[];
  postComments!: IComments[];
  postId: string = '';
  user = localStorage.getItem('userId');
  activeUser = localStorage.getItem('email');


  constructor(private service: CommentsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getComments();

  }

  form = new FormGroup({
    comment: new FormControl('', [Validators.required]),
  });


  postComment(): void {
    this.postId = Object.values(this.route.snapshot.params)[0];

    if (this.form.get('comment')?.value == '') {
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

  getComments(): void {
    const postId = Object.values(this.route.snapshot.params)[0];

    this.service.getPublicationComments().subscribe(data => {
      this.comments = data;
      this.postComments = this.comments?.filter((x) => x?.post?._id === postId);
    });
  }

  deleteComment(commentId: string, postId: string, event: any): void {
    this.service.deleteComment(commentId, postId).subscribe();

    const comment = event.target.parentElement.parentElement.parentElement.parentElement
    comment.remove();

    let currentUrl = this.router.url;

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  likeComment(commentId: string): void {
    this.service.likeComment(commentId).subscribe();

    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  dislikeComment(commentId: string): void {
    this.service.dislikeComment(commentId).subscribe();
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  isReacted(commentId: string): boolean | undefined {
    const targetComment = this.comments?.find(x => x._id === commentId);
    const hasReacted = targetComment?.likes.some((x) => x === this.user) || targetComment?.dislikes.some((x) => x === this.user);

    return hasReacted
  }
}
