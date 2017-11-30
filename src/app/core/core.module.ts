import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SessionService } from './session/session.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [
    SessionService
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
