import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  model = [
    {
      userId: 'user1',
      password: 'password1',
      rol: 'superintendente',
    },
    {
      userId: 'user2',
      password: 'password2',
      rol: 'supervisor',
    },
    {
      userId: 'user3',
      password: 'password3',
      rol: 'Residente',
    },
  ];
  constructor() {}
  login(username: string, password: string): void {
    for (let i = 0; i < this.model.length; i++) {
      if (
        username === this.model[i].userId &&
        password === this.model[i].password
      ) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', username);
        localStorage.setItem('rol', this.model[i].rol);
      }
    }
  }
  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
  }
  isAuthenticated(): boolean {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      return true;
    } else {
      return false;
    }
  }
}
