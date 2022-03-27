import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private registerService: RegisterService, private router: Router) { }

  form = new FormGroup({
    "email": new FormControl('', [Validators.pattern(/[a-z]+@[a-z]+.[a-z]+/), Validators.required]),
    "password": new FormControl('', [Validators.minLength(3), Validators.required]),
    "rePass": new FormControl('', [Validators.minLength(3), Validators.required]),
  });

  onSubmitRegister() {
    this.registerService.registerUser(this.form.value).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('email', this.form.value.email);
      this.router.navigate(['/']);
    });
  }
}


