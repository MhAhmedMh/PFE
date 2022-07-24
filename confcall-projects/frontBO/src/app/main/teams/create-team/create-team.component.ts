import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {
  public createTeamForm!: FormGroup;
  user!: User;
 
  constructor(
    private authService: AuthService,
    private teamService:TeamService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initParamsUser();
    this.initForms();
  }
    initForms(){
    this.createTeamForm = this.formBuilder.group({
      name: ['', Validators.required],
      description:['',Validators.required]
      
    });
  }
  
  initParamsUser() {
    this.user = this.authService.userConnected;
  }
  createTeams(){
    this.teamService.createTeam(this.createTeamForm.value,this.user.id).subscribe(
      (success)=>{
        this.createTeamForm.reset();
      },
      (err)=>{
        console.log(err)
      }
    )

  }
  
}
