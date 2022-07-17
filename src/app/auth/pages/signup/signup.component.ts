import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [],
})
export class SignupComponent implements OnInit {
  faGoogle = faGoogle;

  errorMessage!: string;

  registerForm = this.fb.group({
    displayName: [''],
    email: [''],
    password: [''],
    passwordConfirm: [''],
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

  async register() {
    const credentials = this.registerForm.value;

    const displayName = credentials.displayName ?? '';
    const email = credentials.email ?? '';
    const password = credentials.password ?? '';

    const loginResponse = await this.auth.register({
      displayName,
      email,
      password,
    });

    if (loginResponse.success) {
      this.router.navigateByUrl('/');
    } else {
      this.errorMessage = loginResponse.error;
    }
  }
}
