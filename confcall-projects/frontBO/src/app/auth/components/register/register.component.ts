import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public signUpForm!: FormGroup;
  isValidSignup: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cin: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      userName: ['', Validators.required],
      role: ['', Validators.required],
    });
  }
  signUp() {
    this.usersService.signup(this.signUpForm.value).subscribe(
      (success) => {
        alert(
          "veuillez verifier votre boite email pour l'activation de votre compte"
        );
        this.signUpForm.reset();
        this.router.navigate(['auth/login']);
      },

      (errRes) => {
        if (errRes.error.error) {
          Swal.fire('Erreur', errRes.error.error, 'error');
        } else {
          console.log(errRes);
          let errorMessage = '';
          errRes.error.errors.map((err: any) => {
            errorMessage = err.msg;
          });
          Swal.fire('Erreur', errorMessage, 'error');
        }
      }
    );
  }
}
