import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-to-log-in',
  templateUrl: './to-log-in.component.html',
  styleUrls: ['./to-log-in.component.css'],
})
export class ToLogInComponent implements OnInit {
  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.returnUrl = 'app';
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/app']);
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    } else {
      this.authService.login(this.f['userId'].value, this.f['password'].value);
      this.router.navigate(['/app']);
    }
  }
}
