import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthGuard, AuthGuard } from '@core/guards';
import { ComponentModule } from './core/components';
import { NotfoundComponent } from './core/components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./main/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '',
    canActivate: [NotAuthGuard],
    loadChildren: () => import('./auth').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
