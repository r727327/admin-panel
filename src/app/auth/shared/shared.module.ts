import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

/* PrimeNG modules */
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';

const modules = [
  ReactiveFormsModule,
  ButtonModule,
  InputTextModule,
  PasswordModule,
  CommonModule
];

@NgModule({
  imports: modules,
  exports: modules,
  providers: [AuthService],
})
export class SharedModule { }
