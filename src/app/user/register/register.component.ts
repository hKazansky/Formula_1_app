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
  errors: any
  
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
    this.registerService.registerUser(this.form.value).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.userId);
      localStorage.setItem('email', this.form.value.email);
      this.router.navigate(['/']);
    },(error) => {
      console.log(error.error)
      this.errors = error.error
    });
  }
}


