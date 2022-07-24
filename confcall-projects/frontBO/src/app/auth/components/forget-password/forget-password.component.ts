import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  public forgotpwdForm!: FormGroup;
  isMailSent: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.forgotpwdForm = this.formBuilder.group({
      email: new FormControl('', Validators.required)
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
