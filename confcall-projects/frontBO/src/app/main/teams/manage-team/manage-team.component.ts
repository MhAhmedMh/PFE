import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/shared/models/team.model';
import { Members } from 'src/app/shared/models/viewModels/Member';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TeamService } from 'src/app/shared/services/team.service';
import { UsersService } from 'src/app/shared/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.scss']
})
export class ManageTeamComponent implements OnInit {
  id: string = this.AR.snapshot.params['id'];
  connectedUser!:any;
  teamData!: any;
  teacherName!: any;
  teacherEmail!: any;
  students!: any;
  users!: any;
  searchText!: string;
  public searchFilter: string = '';
  teamName!: any
  teacherImage: any;
  teacher!: any;
  OwnerInfo: any;
  MembersInfo!: any;
  editTeamForm!: FormGroup;
  constructor(
    private AR: ActivatedRoute,
    private teamService: TeamService,
    private userService: UsersService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getTeamInfo();
    // this.getOwnerInfo();
    this.getMembersInfo();
    this.initForms();
    this.initParamsUser();
  }
  getMembersInfo() {
    this.teamService.getTeamMembers(this.id).subscribe((res) => {
      this.MembersInfo = res
    })
  }

  getTeamInfo() {
    this.teamService.getTeamById(this.id).subscribe((res) => {
      this.teamData = res
      this.teamName = this.teamData.name
      this.teacherName = this.teamData.user.userName
      this.teacherEmail = this.teamData.user.email
      this.teacherImage = this.teamData.user.imageURL
      this.students = this.teamData.members
    })
  }
  getUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res;
    });
  }

  addMember(id: string) {
    let memberVM = new Members(this.id = id)
    this.teamService.addMembers(this.teamData.id, memberVM).subscribe(
      (res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Membre ajouté avec succès',
          showConfirmButton: false,
          timer: 1500
        })
      },

      (errRes) => {
        console.log(errRes);
        Swal.fire('', errRes.error, 'warning');
      })


  }
  deletTeam() {
    Swal.fire({
      title: 'Voulez-vous vraiment supprimer l’équipe  ' + this.teamName,
      //text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.teamService.deleteTeam(this.id,this.connectedUser.id).subscribe(
          (res) => {
          Swal.fire('Supprimée!', 'Votre équipe a été supprimée.', 'success');
          this.router.navigate(['/teams']);
        },
        (errRes) => {
          console.log(errRes);
          Swal.fire('', errRes.error, 'error');
        });
      }
    });
  }

  deletMember(e: any) {
    Swal.fire({
      title: 'Voulez-vous vraiment supprimer le membre  ' + e.userName,
      //text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(e.id)
        let memberDVM = new Members(this.id = e.id)
        this.teamService.deleetMembers(this.teamData.id, memberDVM).subscribe((res) => {
          Swal.fire('Supprimée!', 'Membre supprimée.', 'success');

        });
      }

    });

  }
  initForms() {
    this.editTeamForm = this.fb.group({
      'name': new FormControl(this.teamName, [Validators.required]),
      'description': new FormControl('', [Validators.required]),
    });
  }
  updatethisTeam() {
    //let userUpdate:User=Object.assign({},this.user)
    let teamUpdate: Team = {
      ...this.teamData,
      name: this.editTeamForm.value.name,
      description: this.editTeamForm.value.description,

    };

    this.teamService.updateTeam(this.teamData.id, teamUpdate,this.connectedUser.id).subscribe(result => {

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Données modifiés avec succés',
        showConfirmButton: false,
        timer: 1500
      })

    }, errorRes => {
      console.log("update error", errorRes)
      Swal.fire('Erreur', errorRes.error, 'error');
    });
  }
  initParamsUser() {
    this.connectedUser = this.authService.userConnected;
  }

}



