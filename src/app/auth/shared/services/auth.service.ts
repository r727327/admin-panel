import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { AuthenticationService, HttpService } from '@core/services';

@Injectable()
export class AuthService {
  constructor(
    private httpService: HttpService,
    private authenticationService: AuthenticationService
  ) { }

  /**
   * Perform user login by sending the credentials to the backend API.
   * @param credentials The login credentials (email/username and password).
   * @returns An observable indicating the login status (true if login is successful, false otherwise).
   */
  login(credentials: {
    email: string;
    password: string;
  }): Observable<boolean> {
    const endpoint = 'login'; // Replace with the actual login API endpoint

    return this.httpService.post<any>(endpoint, credentials).pipe(
      map((response: any) => {
        // Assuming the backend response includes an authentication token upon successful login
        const authToken = response.authToken;

        // Check if the response contains an authentication token
        if (authToken) {
          // Store the authentication token in the local storage for future requests using authTokenService
          this.authenticationService.setLogin(authToken);
          return true; // Login successful
        } else {
          return false; // Login failed (invalid credentials or other error)
        }
      })
    );
  }
}
