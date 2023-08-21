import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AuthTokenService } from '@core/services';

@Injectable()
export class AuthenticationService {
  private isLoggedInSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private authTokenService: AuthTokenService) {
    this.initLoginState();
  }

  /**
   * Get the login state as an observable.
   * @returns An observable indicating the login status (true if the user is logged in, false otherwise).
   */
  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  /**
   * Initialize the login state based on the presence of the auth token.
   */
  private initLoginState(): void {
    // Check if the auth token is available in the localStorage
    const authToken = this.authTokenService.getAuthToken(); // Get auth-token from the localstorage suing authTokenService
    const isLoggedIn = !!authToken; // Check if authToken is truthy (i.e., not null or undefined)
    this.isLoggedInSubject.next(isLoggedIn); // Set the login state
  }

  /**
   * Set the login state to true.
   */
  setLogin(token: string): void {
    this.authTokenService.setAuthToken(token); // Set the auth token
    this.isLoggedInSubject.next(true); // Change the login state true
  }

  /**
   * Set the login state to false.
   */
  setLogout(): void {
    this.authTokenService.clearAuthToken(); // Clear the auth-token from the localstorage
    this.isLoggedInSubject.next(false); // Set login state to false
  }
}
