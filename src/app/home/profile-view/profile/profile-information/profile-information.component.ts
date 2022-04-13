import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit {

  getUser!: Subscription
  allUsersFromDatabase: any[] = [];
  currentUser: any;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.getUser = this.service.getUserById().subscribe(data => this.currentUser = data)
  }

  ngOnDestroy(): void {
    this.getUser.unsubscribe();
  }

}
