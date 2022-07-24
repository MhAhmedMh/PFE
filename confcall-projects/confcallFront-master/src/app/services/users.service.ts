import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { ForgotPwdVM } from '../models/viewModels/forgotPwdVM';
import { ResetPwdVM } from '../models/viewModels/resetPwdVM';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private client: HttpClient) {}

  getAllUsers() {
    return this.client.get<User[]>(environment.baseUrl + 'users');
  }

  signup(user: User) {
    return this.client.post<any>(environment.baseUrl + 'users/signup', user);
  }

  forgotPwd(forgotPwdVM: ForgotPwdVM) {
    return this.client.put<any>(
      environment.baseUrl + 'users/forgot-password',
      forgotPwdVM
    );
  }

  resetPwd(resetPwdVM: ResetPwdVM) {
    return this.client.put<any>(
      environment.baseUrl + 'users/reset-password',
      resetPwdVM
    );
  }
}
