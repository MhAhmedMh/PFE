import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) { }

  canActivate() {
    const user = this.authService.userConnected;
    // if (user && user.expiration) {
    if (user) {
      //if (moment() < moment(user.expiration)) {
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Votre session a expiré'
      })
      this.router.navigate(['auth/login']);
      return false;
    }
    //}

    //this.router.navigate(['auth/login']);
    //return false;
  }
}
