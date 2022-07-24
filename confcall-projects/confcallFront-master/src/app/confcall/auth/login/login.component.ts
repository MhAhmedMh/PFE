import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  isLoggedIn: boolean = false;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    this.authService.login(this.loginForm.value).subscribe(
      (success) => {
        this.isLoggedIn = true;
        this.loginForm.reset();
        this.router.navigate(['/']);
      },
      (errRes) => {
        console.log(errRes);
        Swal.fire('Erreur', errRes.error, 'error');
      }
    );
  }
}
