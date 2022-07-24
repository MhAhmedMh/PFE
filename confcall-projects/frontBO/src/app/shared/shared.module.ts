import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayaoutComponent } from './components/main-layaout/main-layaout.component';
import { Page404Component } from './components/page404/page404.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamService } from './services/team.service';

import { NgxPaginationModule } from 'ngx-pagination';

import { AuthGuard } from './guards/auth.guard';
import { AuthGuardRole } from './guards/auth-guard-role.service';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
@NgModule({
  declarations: [MainLayaoutComponent, Page404Component, SearchFilterPipe],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild([])
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard,
    AuthGuardRole,
    { provide: 'LOCALSTORAGE', useValue: window.localStorage },
    AuthService,
    UsersService,
    TeamService,
    SearchFilterPipe
  ],
})
export class SharedModule { }
