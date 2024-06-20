import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', redirectTo: '/task-management/home', pathMatch: 'full'},
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('./home-page/home-page.module').then((m) => m.HomePageModule),
      },
      {
        path: 'lists',
        canActivate: [AuthGuard],
        loadChildren: () => import('./task-view/task-view.module').then((m) => m.TaskViewModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
