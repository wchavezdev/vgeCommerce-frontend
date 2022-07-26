import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class VerifySessionGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    if (!this.authService.authState.loggedIn) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
  canLoad(): Observable<boolean> | boolean {
    if (!this.authService.authState.loggedIn) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
