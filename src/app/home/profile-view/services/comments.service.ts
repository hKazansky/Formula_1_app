import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComments } from 'src/app/interfaces/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getPublicationComments() {
    return this.http.get<IComments[]>('http://localhost:3000/comments')
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
}
