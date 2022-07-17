import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: [],
})
export class SigninComponent implements OnInit {
  faGoogle = faGoogle;

  errorMessage!: string;

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  get checking() {
    return this.auth.authState.checking;
  }

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async login() {
    const credentials = this.loginForm.value;

    const email = credentials.email ?? '';
    const password = credentials.password ?? '';

    const loginResponse = await this.auth.login({ email, password });

    if (loginResponse.success) {
      this.router.navigateByUrl('/');
    } else {
      this.errorMessage = loginResponse.error;
    }
  }
}
