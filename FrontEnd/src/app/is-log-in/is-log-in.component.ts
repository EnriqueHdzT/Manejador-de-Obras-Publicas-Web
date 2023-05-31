import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-is-log-in',
  templateUrl: './is-log-in.component.html',
  styleUrls: ['./is-log-in.component.css'],
})
export class IsLogInComponent implements OnInit {
  id: string | null;

  constructor(private roter: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.id = localStorage.getItem('token');
  }
  logout() {
    this.authService.logout();
    this.roter.navigate(['/']);
  }
}
