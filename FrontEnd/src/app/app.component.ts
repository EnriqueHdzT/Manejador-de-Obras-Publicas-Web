import { Component } from '@angular/core';
import { AuthGuard } from './_guards/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FrontEnd';
  isLoggedIn: boolean;
  constructor(private ag: AuthGuard) {
    this.isLoggedIn = ag.isLoggedIn();
  }
}
