import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayaoutComponent } from '../shared/components/main-layaout/main-layaout.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'forgotPassword',
        component: ForgetPasswordComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'resetpassword/:token',
        component: ResetPasswordComponent,
      },
    ],
  },
  {
    path: '',
    component: MainLayaoutComponent,
    children: [
      {
        path: 'profile',
        component: UserProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
