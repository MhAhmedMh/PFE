import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayaoutComponent } from 'src/app/shared/components/main-layaout/main-layaout.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { JoinTeamComponent } from './join-team/join-team.component';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
const routes: Routes = [
{
  path: '',
  component: MainLayaoutComponent,
  children: [
  {
    path: '',
    component:TeamsComponent,
  },
  {
    path: 'createTeams',
    component:CreateTeamComponent,
  },
  {
    path: 'jointeam',
    component:JoinTeamComponent,
  },
  {
    path: ':name/:id',
    component:TeamComponent,
  },
  {
    path: 'manage-team/:name/:id',
    component:ManageTeamComponent,
  },
],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
