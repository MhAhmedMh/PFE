import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-homemain',
  templateUrl: './homemain.component.html',
  styleUrls: ['./homemain.component.css'],
})
export class HomemainComponent implements OnInit {
  // isUserConnected: boolean = false;
  // user!: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.isUserConnected = this.authService.isConnected;
    // this.user = this.authService.userConnected;
  }
}
