import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ImageCropperModule } from 'ngx-image-cropper';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ImageCropperModule,
    SharedModule
  ]
})
export class AuthModule { }
