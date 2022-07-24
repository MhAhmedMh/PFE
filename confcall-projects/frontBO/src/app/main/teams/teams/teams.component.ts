import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/shared/models/team.model';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TeamService } from 'src/app/shared/services/team.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  team!: Team;
  teamName!: string;
  user!: User;
  teamData!: any;
  studentTeamData!: any;
  constructor(
    private teamService: TeamService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initParamsUser();
    this.getTeacherTeams();
    this.getStudentTeams();
  }
  getTeacherTeams() {
    this.teamService.getTeacherTeams(this.user.id).subscribe((res) => {
      this.teamData = res;
    });
  }
  getStudentTeams() {
    this.teamService.getStudentTeams(this.user.id).subscribe((res) => {
      this.studentTeamData = res;
    });
  }
  deletTeam(e: any) { 
    Swal.fire({
      title: 'Voulez-vous vraiment supprimer l’équipe  '+e.name,
      //text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("deleeete",e.id,this.user.id)
        this.teamService.deleteTeam(e.id,this.user.id).subscribe((res) => {
          Swal.fire('Supprimée!', 'Votre équipe a été supprimée.', 'success');
          this.getTeacherTeams();
        });
      }
    });
  }
  initParamsUser() {
    this.user = this.authService.userConnected;
  }
}
