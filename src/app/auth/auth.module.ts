import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthRoutingModule } from './auth-routing.module';

import { SigninComponent } from './pages/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [SigninComponent, LayoutComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class AuthModule {}
