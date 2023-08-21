import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthTokenService, AuthenticationService } from '@core/services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authTokenService: AuthTokenService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const authToken = this.authTokenService.getAuthToken(); // Get auth-token from the localstorage suing authTokenService
    const isLoggedIn = !!authToken;
    if (isLoggedIn) {
      return true; // User is logged in, allow access to the route
    } else {
      // User is not logged in, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
