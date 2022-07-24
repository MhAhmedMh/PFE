import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayaoutComponent } from 'src/app/shared/components/main-layaout/main-layaout.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsPendingListComponent } from './students-pending-list/students-pending-list.component';
import { TeachersPendingListComponent } from './teachers-pending-list/teachers-pending-list.component';
const routes: Routes = [
  {
    path: 'GestiondesUtilisateurs',
    component: MainLayaoutComponent,
    children: [

      {
        path: 'teachersList',
        component: TeachersListComponent,
      },
      {
        path: 'studentsList',
        component: StudentsListComponent,
      },
      {
        path: 'studentsPendingList',
        component: StudentsPendingListComponent,
      },
      {
        path: 'teachersPendingList',
        component: TeachersPendingListComponent,
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUsersRoutingModule { }
