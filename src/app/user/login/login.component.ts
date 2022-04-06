import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errors: string = ''
  constructor(private loginService: LoginService, private router: Router) { }

  form = new FormGroup({
    "email": new FormControl('', [Validators.email, Validators.required]),
    "password": new FormControl('', [Validators.minLength(3), Validators.required]),
  });

  onSubmitLogin() {
    this.loginService.loginUser(this.form.value).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.userId);
      localStorage.setItem('email', this.form.value.email);

      this.router.navigate(['/']);
    }, (error) => {
      this.errors = error.error
    });
  }
}

