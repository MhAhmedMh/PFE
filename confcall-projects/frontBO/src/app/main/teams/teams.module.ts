import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams/teams.component';
import { JoinTeamComponent } from './join-team/join-team.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamComponent } from './team/team.component';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { SearchMembersFilterPipe } from '../pipe/search-members-filter.pipe';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';





@NgModule({
  declarations: [
    TeamsComponent,
    JoinTeamComponent,
    CreateTeamComponent,
    TeamComponent,
    ManageTeamComponent,
    SearchMembersFilterPipe,
    


  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MultiSelectModule,
    SharedModule,
    
  ]
})
export class TeamsModule { }
