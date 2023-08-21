import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    RouterModule,
    ButtonModule
  ],
  exports: [NotfoundComponent]
})
export class ComponentModule { }
