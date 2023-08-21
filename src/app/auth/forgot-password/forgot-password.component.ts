import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@app/layout/service/app.layout.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: 'forgot-password.component.html',
  styleUrls: ['forgot-password.component.scss'],
})

export class ForgotPasswordComponent implements OnInit {
  /******************** Variables declarations **************/

  // Declare the form group for login
  forgotPasswordForm!: FormGroup;

  /******************** Constructor method ******************/
  constructor(
    public layoutService: LayoutService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  /******************** Life cycle hooks *******************/
  ngOnInit() {
    // Initialize the login form during component initialization
    this.initializeForgotPasswordForm();
  }

  /******************** Public methods ********************/

  onSubmit(): void {
    // Check if the form is invalid and return if it is
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    // Call the login service with the form values
    this.authService.login(this.forgotPasswordForm.value).subscribe(() => {
      // Handle login success or error
    });
  }

  /******************** private methods *********************/

  // Initialize the login form using FormBuilder
  private initializeForgotPasswordForm(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
    });
  }

}
