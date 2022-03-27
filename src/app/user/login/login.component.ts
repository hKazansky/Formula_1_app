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

  constructor(private loginService: LoginService, private router: Router) { }

  form = new FormGroup({
    "email": new FormControl('', [Validators.pattern(/[a-z]+@[a-z]+.[a-z]+/), Validators.required]),
    "password": new FormControl('', [Validators.minLength(3), Validators.required]),
  });

  onSubmitLogin() {
    this.loginService.loginUser(this.form.value).subscribe(res => {

      localStorage.setItem('token', res.token);
      this.router.navigate(['/']);
    });
  }
}
