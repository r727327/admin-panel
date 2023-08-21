import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { NotAuthGuard } from './not-auth.guard';

@NgModule({
  providers: [AuthGuard, NotAuthGuard],
})
export class GuardsModule {}
