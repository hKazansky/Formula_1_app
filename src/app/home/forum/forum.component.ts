import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  data: any

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.getAllPublications();
  }

  getAllPublications() {
    this.service.getAllPublications().subscribe(posts => this.data = posts)
  }

}
