import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../shared/services/auth.service';
import { LayoutService } from '@app/layout/service/app.layout.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
  styles: [`
    :host ::ng-deep .pi-eye,
    :host ::ng-deep .pi-eye-slash {
      transform: scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent implements OnInit {
  /******************** Variables declarations **************/
  isSubmit = false;
  // Declare the form group for login
  loginForm!: FormGroup;

  /******************** Constructor method ******************/
  constructor(
    public layoutService: LayoutService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  /******************** Life cycle hooks *******************/
  ngOnInit() {
    // Initialize the login form during component initialization
    this.initializeLoginForm();
  }

  /******************** Public methods ********************/

  onSubmit(): void {
    this.isSubmit = true;
    console.log(this.loginForm)
    // Check if the form is invalid and return if it is
    if (this.loginForm.invalid) {
      return;
    }

    // Call the login service with the form values
    this.authService.login(this.loginForm.value).subscribe(() => {
      // Handle login success or error
      this.isSubmit = false;
      this.loginForm.markAsUntouched();
      this.loginForm.reset();
    });
  }

  /******************** private methods *********************/

  // Initialize the login form using FormBuilder
  private initializeLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', { validators: [Validators.required], updateOn: 'blur' }]
    });
  }

}
