import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from './components';
import { DirectivesModule } from './directives';
import { GuardsModule } from './guards';
import { InterceptorsModule } from './interceptors';
import { PipesModule } from './pipes';
import { ServicesModule } from './services';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    DirectivesModule,
    GuardsModule,
    InterceptorsModule,
    PipesModule,
    ServicesModule,
  ],
})
export class CoreModule {
  // Use the 'forRoot' method to ensure CoreModule is imported only once in the AppModule
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        /* core services if any */
      ],
    };
  }
}
