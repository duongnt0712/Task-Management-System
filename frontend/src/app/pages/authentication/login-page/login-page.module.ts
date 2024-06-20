import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { LayoutModule } from 'src/app/core/layout/layout.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';

const NzModules = [
  NzCardModule,
  NzFormModule,
  NzInputModule,
  NzButtonModule
]

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    NzModules,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPageComponent,
      },
    ])
  ],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
})
export class LoginPageModule { }
