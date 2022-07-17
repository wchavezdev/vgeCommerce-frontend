import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User as FirebaseUser } from '@angular/fire/auth';

import {
  LoginCredentials,
  LoginResponse,
  RegisterFields,
  AuthState,
} from '../interfaces';

import { formatUserProps } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: AuthState = {
    checking: true,
    loggedIn: false,
  };

  constructor(private auth: AngularFireAuth) {}

  async login({ email, password }: LoginCredentials): Promise<LoginResponse> {
    try {
      this.authState.checking = true;

      const userCredential = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );

      const { user } = userCredential;

      if (!user) throw new Error('Something went wrong');

      this.authState.loggedIn = true;
      this.authState.user = formatUserProps(user as FirebaseUser);

      this.authState.checking = false;

      return {
        success: true,
      };
    } catch (error: any) {
      this.authState.checking = false;

      return {
        success: false,
        error: error.message,
      };
    }
  }

  async register({
    displayName,
    email,
    password,
  }: RegisterFields): Promise<LoginResponse> {
    try {
      this.authState.checking = true;

      const userCredential = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );

      const { user } = userCredential;

      if (!user) throw new Error('Something went wrong');

      await user.updateProfile({
        displayName,
      });

      this.authState.loggedIn = true;
      this.authState.user = formatUserProps(user as FirebaseUser);

      this.authState.checking = false;

      return {
        success: true,
      };
    } catch (error: any) {
      this.authState.checking = false;

      return {
        success: false,
        error: error.message,
      };
    }
  }

  async logout(): Promise<void> {
    await this.auth.signOut();

    this.authState.loggedIn = false;
    this.authState.user = undefined;
  }

  verifySession() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.authState.loggedIn = true;
        this.authState.user = formatUserProps(user as FirebaseUser);
      } else {
        this.authState.loggedIn = false;
        this.authState.user = undefined;
      }

      this.authState.checking = false;
    });
  }
}
