import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AuthTokenService } from './auth-token.service';
import { AuthenticationService } from './authentication.service';

@NgModule({
  providers: [HttpService, AuthTokenService, AuthenticationService],
})
export class ServicesModule {}
