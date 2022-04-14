import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

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
    if (this.form.get('email')?.value == '' && this.form.get('password')?.value == '') {
      this.errors = 'All fields are required'
      setTimeout(() => {
        this.errors = '';
      }, 4000);
      return
    }
    
    this.loginService.loginUser(this.form.value).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.userId);
      localStorage.setItem('email', this.form.value.email);

      this.router.navigate(['/']);
    }, (error) => {
      this.errors = error.error
      setTimeout(() => {
        this.errors = ''
      }, 4000)
    });


  }

}
