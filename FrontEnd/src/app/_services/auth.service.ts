import { Injectable } from '@angular/core';
import { Login } from '../_interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login(): void {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.removeItem('token');
  }
  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }
  isAuthenticated(): boolean {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      return true;
    } else {
      return false;
    }
  }
}
