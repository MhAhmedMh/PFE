import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Team } from '../models/team.model';
import { Members } from '../models/viewModels/Member';
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private client: HttpClient,
    @Inject('LOCALSTORAGE') private localStorage: Storage
  ) { }

  createTeam(data: Team, id: string) {
    return this.client.post<Team>(environment.baseUrl + 'teams/' + id, data);
  }
  getTeacherTeams(id: string) {
    return this.client.get<any>(environment.baseUrl + 'teams?users=' + id)
  }
  getStudentTeams(id: string) {
    return this.client.get<any>(environment.baseUrl + 'teams/studentList?members=' + id)
  }
  deleteTeam(id: string, userid:any) {
    return this.client.delete<any>(environment.baseUrl + 'teams/' + id+'?user='+ userid).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  addMembers(id: string, members: Members) {
    return this.client.post<any>(environment.baseUrl + 'teams/teamMembers/' + id, members)
  }
  getTeamById(id: string) {
    return this.client.get<Team>(environment.baseUrl + 'teams/team/' + id)
  }
  deleetMembers(id: string, members: Members) {
    return this.client.put<any>(environment.baseUrl + 'teams/teamMembers/' + id, members)
  }
  getTeamOwner(id:string){
    return this.client.get<any>(environment.baseUrl+ 'teams/owner/' + id)
  }
  getTeamMembers(id:string){
    return this.client.get<any>(environment.baseUrl+ 'teams/members/' + id)
  }

  updateTeam(id:string, data:Team,userId:string){
    return this.client.put<Team>(environment.baseUrl + 'teams/updateTeam/' + id + "?user=" + userId, data)
  }
  
}
