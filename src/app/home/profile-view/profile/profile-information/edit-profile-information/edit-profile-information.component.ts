import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile-information',
  templateUrl: './edit-profile-information.component.html',
  styleUrls: ['./edit-profile-information.component.css']
})
export class EditProfileInformationComponent implements OnInit {

  currentUser!: IUser;
  errors: string = '';

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  form = new FormGroup({
    "fullname": new FormControl('', [Validators.minLength(3), Validators.required]),
    "birthday": new FormControl('', [Validators.required, Validators.pattern(/[0-9]+\/[0-9]+\/[0-9]+/)]),
    "country": new FormControl('', [Validators.required]),
    "team": new FormControl('', [Validators.minLength(4), Validators.required]),
  })

  getUser(): void {
    this.service.getUserById().subscribe((user) => this.currentUser = user)
  }

  onSubmitEdit(): void {
    const formValues = Object.entries(this.form.value)
    if (formValues.every(([key, value]) => value === '')) {
      this.errors = 'All fields are required';

      setTimeout(() => {
        this.errors = '';

      }, 4000)

      return;
    }

    const userData = {
      fullname: this.form.get('fullname')?.value,
      birthday: this.form.get('birthday')?.value,
      country: this.form.get('country')?.value,
      team: this.form.get('team')?.value,
    }
    this.service.editUserInformation(userData).subscribe();
    this.router.navigate(['/profile/my-account'])

  }
}
