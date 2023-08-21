import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthenticationService } from '@core/services';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event) => {
        // Do nothing for successful responses
      }),
      catchError((error: HttpErrorResponse) => {
        // If the response status is 401 (Unauthorized), handle it
        if (error.status === 401) {
          // Set the login state to false
          this.authenticationService.setLogout();
        }

        // Re-throw the error to be caught by other error-handling interceptors or subscribers
        return throwError(error);
      })
    );
  }
}
