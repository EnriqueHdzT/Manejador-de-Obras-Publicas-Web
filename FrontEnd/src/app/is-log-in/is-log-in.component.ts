import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';
@Injectable()
@Component({
  selector: 'app-is-log-in',
  templateUrl: './is-log-in.component.html',
  styleUrls: ['./is-log-in.component.css'],
})
export class IsLogInComponent implements OnInit {
  id: string | null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.id = localStorage.getItem('token');
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
