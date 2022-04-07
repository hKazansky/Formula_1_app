import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPosts } from '../interfaces/posts';
import { IComments } from '../interfaces/comments';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPublications() {
    return this.http.get<IPosts[]>('http://localhost:3000/posts');
  }

  getPublicationComments() {
    return this.http.get<IComments[]>('http://localhost:3000/comments')
  }

  getPostById(postId: any) {
    const params = new HttpParams({
      fromObject: {
        postId
      }
    });

    return this.http.get<IPosts>(`http://localhost:3000/posts/${postId}`, { params: params })
  }

  createPost(body: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/create', body).pipe(catchError(this.errorHandler))
  }

  editPost(postId: string, body: any): Observable<any> {
    const params = new HttpParams({
      fromObject: {
        postId
      }
    });

    return this.http.put<any>(`http://localhost:3000/posts/${postId}/edit`, body, { params: params }).pipe(catchError(this.errorHandler))
  }

  deletePost(postId: string) {
    const params = new HttpParams({
      fromObject: {
        postId
      }
    });

    return this.http.delete<any>(`http://localhost:3000/posts/${postId}/delete`, { params: params })
  }

  createComment(body: any, postId: any) {
    const params = new HttpParams({
      fromObject: {
        postId
      }
    });

    return this.http.post<any>('http://localhost:3000/create-comment', body, { params: params })
  }


  deleteComment(commentId: any, postId: any) {
    const params = new HttpParams({
      fromObject: {
        commentId,
        postId
      }
    });

    return this.http.delete<any>(`http://localhost:3000/delete/${commentId}`, { params: params })
  }

  likeComment(commentId: string) {
    const params = new HttpParams({
      fromObject: {
        commentId
      }
    });

    return this.http.post<any>(`http://localhost:3000/comments/${commentId}/like`, '', { params: params })
  }

  dislikeComment(commentId: string) {
    const params = new HttpParams({
      fromObject: {
        commentId
      }
    });

    return this.http.post<any>(`http://localhost:3000/comments/${commentId}/dislike`, '', { params: params })
  }

  errorHandler(error: any) {
    return throwError(error || 'Server error')
  }

}
