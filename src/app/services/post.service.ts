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

  errorHandler(error: any) {
    return throwError(error || 'Server error')
  }

}
