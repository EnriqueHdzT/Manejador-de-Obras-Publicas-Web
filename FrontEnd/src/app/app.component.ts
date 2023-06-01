import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FrontEnd';
  isLoggedIn: boolean;
  constructor(private as: AuthService) {
    this.isLoggedIn = as.isAuthenticated();
  }
}
