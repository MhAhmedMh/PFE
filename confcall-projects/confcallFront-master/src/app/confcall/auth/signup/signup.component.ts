import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signUpForm!: FormGroup;
  isValidSignup: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  signUp() {
    this.usersService.signup(this.signUpForm.value).subscribe(
      (success) => {
        alert(
          "veuillez verifier votre boite email pour l'activation de votre compte"
        );
        this.signUpForm.reset();
        this.router.navigate(['login']);
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
