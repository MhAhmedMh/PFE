import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomemainComponent } from './confcall/home/homemain/homemain.component';
import { HomeHeaderComponent } from './confcall/home/home-header/home-header.component';
import { AboutUsComponent } from './confcall/home/about-us/about-us.component';
import { ClientsComponent } from './confcall/home/clients/clients.component';
import { ServicesComponent } from './confcall/home/services/services.component';
import { DemoComponent } from './confcall/home/demo/demo.component';
import { ContactUsComponent } from './confcall/home/contact-us/contact-us.component';
import { AccueilComponent } from './confcall/home/accueil/accueil.component';
import { StartConfComponent } from './confcall/home/start-conf/start-conf.component';
import { FooterComponent } from './confcall/home/footer/footer.component';
import { LoginComponent } from './confcall/auth/login/login.component';
import { SignupComponent } from './confcall/auth/signup/signup.component';
import { ForgotpasswordComponent } from './confcall/auth/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './confcall/auth/resetpassword/resetpassword.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EspaceUserMainComponent } from './confcall/espace-user/espace-user-main/espace-user-main.component';
import { CreateConfComponent } from './confcall/espace-user/create-conf/create-conf.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomemainComponent,
    HomeHeaderComponent,
    AboutUsComponent,
    ClientsComponent,
    ServicesComponent,
    DemoComponent,
    ContactUsComponent,
    AccueilComponent,
    StartConfComponent,
    FooterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    EspaceUserMainComponent,
    CreateConfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [{ provide: 'LOCALSTORAGE', useValue: window.localStorage }],
  bootstrap: [AppComponent],
})
export class AppModule {}
