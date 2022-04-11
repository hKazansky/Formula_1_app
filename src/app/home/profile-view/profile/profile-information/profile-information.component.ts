import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit {

  getAllUsers!: Subscription
  allUsersFromDatabase: any[] = [];
  currentUser: any;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.getAllUsers = this.service.getAllUsers().subscribe(data => {
      this.allUsersFromDatabase = data;
      this.currentUser = this.allUsersFromDatabase.filter((user) => user.email === localStorage.getItem('email'))[0];
    })
  }

  ngOnDestroy(): void {
    this.getAllUsers.unsubscribe();
  }

}
