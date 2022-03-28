import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  allUsersFromDatabase: any[] = [];
  currentUser: any;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.service.getAllUsers().subscribe(data => {
      this.allUsersFromDatabase = data;
      this.currentUser = this.allUsersFromDatabase.filter((user) => user.email === localStorage.getItem('email'))[0];
    })
  }

}
