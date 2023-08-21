import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  {
    path: 'login',
    loadChildren: () => import('./login').then((m) => m.LoginModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password').then((m) => m.ForgotPasswordModule),
  },
  // {
  //   path: '**',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
