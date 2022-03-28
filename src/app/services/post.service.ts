import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createPost(body: any) {

    return this.http.post<any>('http://localhost:3000/create', body)
  }

  getAllPublications(){
    return this.http.get<any>('http://localhost:3000/posts');
  }

  getUserPosts() {
    return this.http.get<any>('http://localstorage:3000/user-posts');
  }

}
