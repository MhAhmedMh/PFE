import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenVM } from 'src/app/models/viewModels/tokenVM.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-espace-user-main',
  templateUrl: './espace-user-main.component.html',
  styleUrls: ['./espace-user-main.component.css'],
})
export class EspaceUserMainComponent implements OnInit {
  isUserConnected: boolean = false;
  user!: TokenVM;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initParamsUser();
  }

  initParamsUser() {
    this.isUserConnected = this.authService.isConnected;
    this.user = this.authService.userConnected;
  }

  logout() {
    this.authService.logout();
    // to do redirect to accueil
    this.router.navigate(['/']);
  }
}
