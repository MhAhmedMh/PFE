import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  public forgotpwdForm!: FormGroup;
  isMailSent: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.forgotpwdForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  forgotPwd() {
    this.userService.forgotPwd(this.forgotpwdForm.value).subscribe(
      (success) => {
        console.log(success);
        this.isMailSent = true;
      },
      (errRes) => {
        console.log(errRes);
        Swal.fire('Erreur', errRes.error.error, 'error');
      }
    );
  }
}
