import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dahoboard.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      // {
      //   path: '',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full',
      // },
      { path: 'dashboard', component: DashboardComponent },

      // {
      //   path: '**',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full',
      // },
    ]),
  ],
  exports: [RouterModule],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule { }
