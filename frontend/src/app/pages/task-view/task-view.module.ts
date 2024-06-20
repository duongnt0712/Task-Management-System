import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { TaskViewComponent } from './task-view.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';

const NzModules = [
  NzPageHeaderModule,
  NzCardModule,
  NzGridModule,
  NzInputModule,
  NzButtonModule,
  NzListModule,
  NzIconModule,
  NzLayoutModule,
  NzCheckboxModule,
  NzDropDownModule,
  NzTagModule,
  NzDividerModule,
  NzTableModule,
  NzSelectModule,
  NzDrawerModule,
  NzFormModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [
    CommonModule,
    NzModules,
    FormsModule,
    DragDropModule,
    RouterModule.forChild([
      { path: '', component: TaskViewComponent },
      { path: ':listId', component: TaskViewComponent },
      { path: '**', redirectTo: '/', pathMatch: 'full' },
    ])
  ],
  declarations: [TaskViewComponent],
  exports: [TaskViewComponent]
})
export class TaskViewModule { }
