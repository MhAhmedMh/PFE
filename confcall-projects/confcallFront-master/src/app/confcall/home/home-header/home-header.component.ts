import { Component, Input, OnInit } from '@angular/core';
import { TokenVM } from 'src/app/models/viewModels/tokenVM.model';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css'],
})
export class HomeHeaderComponent implements OnInit {
  // @Input() isUserConnected: boolean = false;
  // @Input() user!: TokenVM;

  isUserConnected: boolean = false;
  user!: TokenVM;
  loginBOUrl: string = environment.loginBOUrl;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initParamsUser();
  }

  initParamsUser() {
    this.isUserConnected = this.authService.isConnected;
    this.user = this.authService.userConnected;
  }

  logout() {
    this.authService.logout();
    this.initParamsUser();
  }
}
