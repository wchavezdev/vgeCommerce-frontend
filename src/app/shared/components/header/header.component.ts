import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

import {
  faUser,
  faCartShopping,
  faSignIn,
  faSignOut
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faCartShopping = faCartShopping;
  faSignIn = faSignIn;

  constructor(private auth: AuthService) {}

  get authState() {
    return this.auth.authState;
  }

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }
}
