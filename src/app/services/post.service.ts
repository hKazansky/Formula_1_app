import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createPost(body: any) {
    return this.http.post<any>('http://localhost:3000/create', body)
  }

  createComment(body: any, postId: any) {
    const params = new HttpParams({
      fromObject: {
        postId
      }
    });

    return this.http.post<any>('http://localhost:3000/create-comment', body, { params: params })
  }

  getAllPublications() {
    return this.http.get<any>('http://localhost:3000/posts');
  }

  getPublicationComments() {
    return this.http.get<any>('http://localhost:3000/comments')
  }

  getPostById(postId: any) {
    const params = new HttpParams({
      fromObject: {
        postId
      }
    });

    return this.http.get<any>(`http://localhost:3000/posts/${postId}`, { params: params })
  }

  editPost(postId: string, body: any) {
    const params = new HttpParams({
      fromObject: {
        postId
      }
    });

    return this.http.put<any>(`http://localhost:3000/posts/${postId}/edit`, body, { params: params })
  }

  deletePost(postId: string) {
    const params = new HttpParams({
      fromObject: {
        postId
      }
    });

    return this.http.delete<any>(`http://localhost:3000/posts/${postId}/delete`, { params: params })
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

}
