import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './signup-page.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/core/layout/layout.module';
import { NzCardModule } from 'ng-zorro-antd/card';
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
  declarations: [SignupPageComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    NzModules,
    RouterModule.forChild([
      {
        path: '',
        component: SignupPageComponent,
      },
    ])
  ],
  exports: [SignupPageComponent],
})
export class SignupPageModule { }
