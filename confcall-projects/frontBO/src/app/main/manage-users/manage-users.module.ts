import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsPendingListComponent } from './students-pending-list/students-pending-list.component';
import { TeachersPendingListComponent } from './teachers-pending-list/teachers-pending-list.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [

    TeachersListComponent,
    StudentsListComponent,
    StudentsPendingListComponent,
    TeachersPendingListComponent

  ],
  imports: [
    CommonModule,
    ManageUsersRoutingModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class ManageUsersModule { }
