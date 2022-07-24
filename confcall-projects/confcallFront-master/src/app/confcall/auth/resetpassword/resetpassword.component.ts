import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResetPwdVM } from 'src/app/models/viewModels/resetPwdVM';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
})
export class ResetpasswordComponent implements OnInit {
  public resetPwdForm!: FormGroup;
  resetToken: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService
  ) {
    this.resetToken = this.route.snapshot.params['token'];

    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   let value = params.get('token');
    //   if (value != null) this.resetToken = value;
    // });
  }

  ngOnInit(): void {
    this.resetPwdForm = this.formBuilder.group({
      password: ['', Validators.required],
    });
  }
  resetPwd() {
    if (!this.resetToken) {
      alert('ereurr token vide');
      return;
    }

    let resetVM = new ResetPwdVM(
      this.resetPwdForm.controls['password'].value,
      this.resetToken
    );
    this.userService.resetPwd(resetVM).subscribe(
      (success) => {
        console.log(success);
        this.router.navigate(['/']);
      },
      (errRes) => {
        console.log(errRes);
        let errorMessage = '';
        errRes.error.errors.map((err: any) => {
          errorMessage += err.msg;
        });

        Swal.fire('Erreur', errorMessage, 'error');
      }
    );
  }
}
