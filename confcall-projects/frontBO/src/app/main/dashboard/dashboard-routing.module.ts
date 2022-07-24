import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayaoutComponent } from 'src/app/shared/components/main-layaout/main-layaout.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayaoutComponent,
    children: [
      {
        path: '',
        component: MainDashboardComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
