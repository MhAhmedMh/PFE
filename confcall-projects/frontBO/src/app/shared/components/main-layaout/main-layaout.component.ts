import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user.model';
import { TokenVM } from '../../models/viewModels/tokenVM.model';
import { AuthService } from '../../services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-main-layaout',
  templateUrl: './main-layaout.component.html',
  styleUrls: ['./main-layaout.component.scss']
})
export class MainLayaoutComponent implements OnInit {
// @Input() isUserConnected: boolean = false;
  // @Input() user!: TokenVM;
  searchText!: string;
  public searchFilter: string = '';
  isUserConnected: boolean = false;
  user!: User;
  users!:any;
  constructor(private authService: AuthService, private router:Router,private userService: UsersService) {}

  ngOnInit(): void {
    this.initParamsUser();
    this.getUsers();
  }

  initParamsUser() {
    this.isUserConnected = this.authService.isConnected;
    this.user = this.authService.userConnected;
  }

  logout() {
    this.authService.logout();
    this.initParamsUser();
    window.location.href = environment.homeUrl;
  }
  getUsers() {
  this.userService.getAllUsers().subscribe((res) => {
    this.users = res;
  });
  }

}
