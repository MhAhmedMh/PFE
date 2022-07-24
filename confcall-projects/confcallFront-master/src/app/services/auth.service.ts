import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginVM } from '../models/viewModels/login-vm.model';
//import jwt_decode from 'jwt-decode';
import { map } from 'rxjs/operators';
import { TokenVM } from '../models/viewModels/tokenVM.model';

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
      .post<any>(environment.baseUrl + 'users/login', loginVM)
      .pipe(
        map((response: any) => {
          //console.log(response);
          // const decodedToken: TokenVM = jwt_decode(response.token);
          // console.log(decodedToken);
          this.localStorage.setItem('connected_user', JSON.stringify(response));
          // this.localStorage.setItem(
          //   'currentUser',
          //   JSON.stringify(decodedToken)
          // );
          return true;
        })
      );
  }

  logout() {
    this.localStorage.removeItem('connected_user');
  }

  get token() {
    let value = this.localStorage.getItem('connected_user');
    if (value) {
      return JSON.parse(value).token;
    }
  }

  get isConnected() {
    return this.localStorage.getItem('connected_user') != null;
  }

  get userConnected() {
    let value = this.localStorage.getItem('connected_user');
    if (value) {
      return JSON.parse(value);
    }
  }
}
