import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthTokenService, AuthenticationService } from '@core/services';

@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(
    private authTokenService: AuthTokenService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const authToken = this.authTokenService.getAuthToken(); // Get auth-token from the localstorage suing authTokenService
    const isLoggedIn = !!authToken;
    // Check if the user is not logged in
    if (!isLoggedIn) {
      return true; // Allow access to the route
    } else {
      // User is logged in, redirect to dashboard or any other page
      this.router.navigate(['/dashboard']);
      return false; // Prevent navigation to the guarded route
    }
  }
}
