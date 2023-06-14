import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  model = [
    {
      userId: 'user0',
      password: 'password0',
      rol: 'ADMIN',
    },
    {
      userId: 'user1',
      password: 'password1',
      rol: 'SUPINT',
    },
    {
      userId: 'user2',
      password: 'password2',
      rol: 'SUPVIS',
    },
    {
      userId: 'user3',
      password: 'password3',
      rol: 'RES',
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
        localStorage.setItem('rol', this.model[i].rol);
      }
    }
  }
  logout(): void {
    localStorage.clear();
  }
  isAuthenticated(): boolean {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      return true;
    } else {
      return false;
    }
  }
}
