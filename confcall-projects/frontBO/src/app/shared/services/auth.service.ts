import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LoginVM } from '../models/viewModels/login-vm.model';
import jwt_decode from 'jwt-decode';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TokenVM } from '../models/viewModels/tokenVM.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private client: HttpClient,
    @Inject('LOCALSTORAGE') private localStorage: Storage
  ) {}

  login(loginVM: LoginVM) {
    return this.client
      .post<any>(environment.baseUrl + 'users/auth/login', loginVM)
      .pipe(
        map((response: any) => {
          const decodedToken: TokenVM = jwt_decode(response.token);
          this.localStorage.setItem('currentUser', JSON.stringify(decodedToken.userInfo));
          this.localStorage.setItem('token', response.token);
          return true;
        })
      );
  }

  logout() {
    this.localStorage.removeItem('currentUser');
  }
  
  updateConnectedUser(newUser:User){
    //this.localStorage.removeItem('currentUser');
    this.localStorage.setItem('currentUser', JSON.stringify(newUser));
  }

  get token() {
    let value = this.localStorage.getItem('token');
    return value;
  }

  get isConnected() {
    return this.localStorage.getItem('currentUser') != null;
  }

  get userConnected() {
    let value = this.localStorage.getItem('currentUser');
    if (value) {
      return JSON.parse(value);
    }
  }

  get isAdmin() {
    let user = this.userConnected;
    return user.role == "admin";
  }

  get isEnseignant() {
    let user = this.userConnected;
    return user.role == "enseignant";
  }

  get isEtudiant() {
    let user = this.userConnected;
    return user.role == "etudiant";
  }
}
