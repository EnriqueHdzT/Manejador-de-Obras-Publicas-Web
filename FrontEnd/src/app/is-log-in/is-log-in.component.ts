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
  rol: string | null;
  isAdmin: Boolean = false;
  isSuperIntendente: Boolean = false;
  isSupervisor: Boolean = false;
  isResidente: Boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.rol = localStorage.getItem('rol');

    // Rol Verification
    if (this.rol === 'ADMIN') {
      this.isAdmin = true;
    } else if (this.rol === 'SUPINT') {
      this.isSuperIntendente = true;
    } else if (this.rol === 'SUPVIS') {
      this.isSupervisor = true;
    } else if (this.rol === 'RES') {
      this.isResidente = true;
    } else {
      console.log('IsLogInComponent on Constructor, Rol Verification');
      this.logout();
    }
  }

  ngOnInit(): void {}
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
