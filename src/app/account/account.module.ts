import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  declarations: [LoginComponent, SignUpComponent]
})
export class AccountModule { }
