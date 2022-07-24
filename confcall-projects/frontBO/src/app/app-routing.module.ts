import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './shared/components/page404/page404.component';
import { AuthGuardRole } from './shared/guards/auth-guard-role.service';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('./main/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard, AuthGuardRole]
  },
  {
    path: '',
    loadChildren: () =>
      import('./main/manage-users/manage-users.module').then(
        (m) => m.ManageUsersModule
      ),
    canActivate: [AuthGuard, AuthGuardRole]
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./main/teams/teams.module').then(
        (m) => m.TeamsModule
      ),
    canActivate: [AuthGuard, AuthGuardRole]
  },
  {
    path: 'conversation',
    loadChildren: () =>
      import('./main/conversation/conversation.module').then(
        (m) => m.ConversationModule
      ),
    canActivate: [AuthGuard, AuthGuardRole]
  },

  { path: 'not-found', component: Page404Component },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
