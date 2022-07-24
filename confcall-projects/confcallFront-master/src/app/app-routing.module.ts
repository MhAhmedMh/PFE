import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './confcall/auth/forgotpassword/forgotpassword.component';
import { LoginComponent } from './confcall/auth/login/login.component';
import { ResetpasswordComponent } from './confcall/auth/resetpassword/resetpassword.component';
import { SignupComponent } from './confcall/auth/signup/signup.component';
import { CreateConfComponent } from './confcall/espace-user/create-conf/create-conf.component';
import { EspaceUserMainComponent } from './confcall/espace-user/espace-user-main/espace-user-main.component';
import { HomemainComponent } from './confcall/home/homemain/homemain.component';

const routes: Routes = [
  //{path:'',redirectTo:'login',pathMatch:'full'},

  { path: '', component: HomemainComponent },
  { path: 'login/forgotPassword', component: ForgotpasswordComponent },
  { path: 'resetpassword/:token', component: ResetpasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'user',
    component: EspaceUserMainComponent,
    children: [{ path: 'create-conf', component: CreateConfComponent }],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
