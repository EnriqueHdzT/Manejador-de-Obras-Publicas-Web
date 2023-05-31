import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../_interfaces/login';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-to-log-in',
  templateUrl: './to-log-in.component.html',
  styleUrls: ['./to-log-in.component.css'],
})
export class ToLogInComponent implements OnInit {
  model: Login = {
    userId: '',
    password: '',
  };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.returnUrl = '/';
    this.authService.logout();
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    } else {
      if (
        this.f['userId'].value === this.model.userId &&
        this.f['password'].value === this.model.password
      ) {
        console.log('Login Succesful');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', this.f['userId'].value);
        this.router.navigate([this.returnUrl]);
      } else {
        this.message = 'Please check your userId and Password';
      }
    }
  }
}
