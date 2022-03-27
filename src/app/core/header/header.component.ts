import { Component, OnInit } from '@angular/core';

const GOOGLE_API_KEY = 'AIzaSyB2hyVwH1DR-3C39ThPNAURhPJQOR0sAO0'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  latitude = 51.67818;
  longitude = 7.809007;
  
  constructor() { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return Boolean(localStorage.getItem('token'));
  }

  logout() {
    localStorage.removeItem('token');

  }
}
