import { Component } from '@angular/core';
import { Router } from '@angular/router';

// const GOOGLE_API_KEY = 'AIzaSyB2hyVwH1DR-3C39ThPNAURhPJQOR0sAO0'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private router: Router) { }

  isLoggedIn() {
    return Boolean(localStorage.getItem('token'));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    this.router.navigate(['/auth/login'])
  }
}
