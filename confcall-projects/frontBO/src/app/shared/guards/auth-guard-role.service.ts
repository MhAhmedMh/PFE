import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanLoad, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()

export class AuthGuardRole implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router,  private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkUserRole(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {

    let url = `/${route.path}`;
    return this.checkUserRole(url);
  }

  checkUserRole(url: string): boolean {
    let access: boolean = true;

    switch (url) {
      //case "/alertslist":
      //case "/alertpurge":
      //  access = this.accountService.userHasPermission(Permission.DROIT_HYPERVISOR_ALERTS);
      //  break;

    }

    // if (url.startsWith("/stagiaires")) {
    //   access = this.isAdmin;
    // }

    if (!access) {
      this.router.navigate(['/accessdenied/401']);
    }
    return true;
  }

  get isAdmin() {
    return this.authService.isAdmin;
  }

  get isEnseignant() {
    return this.authService.isEnseignant;
  }

  get isEtudiant() {
    return this.authService.isEtudiant;
  }
}
