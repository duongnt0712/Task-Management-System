import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'login',
        // canActivate: [UserInfoGuard],
        loadChildren: () => import('./login-page/login-page.module').then((m) => m.LoginPageModule),
      },
      {
        path: 'signup',
        // canActivate: [UserInfoGuard],
        loadChildren: () => import('./signup-page/signup-page.module').then((m) => m.SignupPageModule),
      },
    ])
  ]
})
export class AuthenticationModule { }
