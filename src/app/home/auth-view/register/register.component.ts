import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/home/auth-view/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  errors: string = '';

  constructor(private registerService: RegisterService, private router: Router) { }

  form = new FormGroup({
    "email": new FormControl('', [Validators.email, Validators.required]),
    "password": new FormControl('', [Validators.minLength(3), Validators.required]),
    "fullname": new FormControl('', [Validators.minLength(3), Validators.required]),
    "birthday": new FormControl('', [Validators.required, Validators.pattern(/[0-9]+\/[0-9]+\/[0-9]+/)]),
    "country": new FormControl('', [Validators.required]),
    "team": new FormControl('', [Validators.minLength(4), Validators.required]),
    "rePass": new FormControl('', [Validators.minLength(3), Validators.required]),
  });

  onSubmitRegister() {
    if (this.form.get('password')?.value !== this.form.get('rePass')?.value) {
      this.errors = 'Passwords don\'t match'
      return;
    }

    if (Object.entries(this.form.value).every(([key, value]) => value === '')) {
      this.errors = 'All fields are required!'
      setTimeout(() => {
        this.errors = ''
      }, (4000));
      return;
    }


    this.registerService.registerUser(this.form.value).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.userId);
      localStorage.setItem('email', this.form.value.email);

      this.router.navigate(['/']);
    }, (error) => {
      this.errors = error.error
    });
  }

}
