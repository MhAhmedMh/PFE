import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';
import { AuthService } from '../../../shared/services/auth.service';
import Swal from 'sweetalert2';
import { ChangePwdVM } from 'src/app/shared/models/viewModels/ChangePwdVM';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  // @Input() isUserConnected: boolean = false;
  // @Input() user!: TokenVM;
  isUserConnected: boolean = false;
  user!: User;
  editUserForm!: FormGroup;
  updateUserPasswordForm!: FormGroup;
  resetToken: string = '';
  image!:any;
  choosen!:any;
  submitted!:any

  constructor(private authService: AuthService, private userService: UsersService, private fb: FormBuilder,private client: HttpClient) { }

  ngOnInit(): void {
    this.initParamsUser();
    this.initForms();

  }
  fileChoosen(event:any){
    if(event.target.value){
      this.image =<File>event.target.files[0];
      this.choosen=true;
    }
  }
  submitPhoto(){
    let fd =  new FormData();
    this.submitted=true
    if (this.image){
      fd.append('image', this.image,this.image.name);
      this.userService.uploadImage(this.user.id,fd).subscribe((res)=>{
        console.log(this.image.name)
        this.authService.updateConnectedUser(res);
        this.initParamsUser();
        this.ngOnInit()
        if(res['success']){
          this.authService.updateConnectedUser(res);
          this.initParamsUser();
          this.ngOnInit()
        }
      })
    }
  }



  initForms() {
    this.editUserForm = this.fb.group({
      'lastName': new FormControl(this.user.lastName, [Validators.required]),
      'firstName': new FormControl(this.user.firstName, [Validators.required]),
      'userName': new FormControl(this.user.userName, [Validators.required]),
      'cin': new FormControl(this.user.cin, [Validators.required]),
      'phone': new FormControl(this.user.phone, [Validators.required])

    });
    this.updateUserPasswordForm = this.fb.group({
      'oldPassword': new FormControl('', [Validators.required]),
      'newPassword': new FormControl('', [Validators.required]),
      'cnewPassword': new FormControl('', [Validators.required]),

    })  
  }
  updateUserPassword(){
 
    let changePwdVM = new ChangePwdVM(
      this.updateUserPasswordForm.controls['oldPassword'].value,
      this.updateUserPasswordForm.controls['newPassword'].value,
      this.updateUserPasswordForm.controls['cnewPassword'].value
    );
    this.userService.updateUserPassword(changePwdVM, this.user.id).subscribe(

      (res) => {
        this.authService.updateConnectedUser(res);
        this.initParamsUser();
        console.log(this.user.id)
        console.log(res);
        console.log()
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Votre mot de passe a été changé',
          showConfirmButton: false,
          timer: 1500
        })
      },
      
      (errRes) => {
          console.log(errRes);
          Swal.fire('Erreur', errRes.error.err, 'error');
      })
      
      ;
    }
  
    

  initParamsUser() {
    this.isUserConnected = this.authService.isConnected;
    this.user = this.authService.userConnected;
    // console.log(this.user)
  }


  updateUser() {
    //let userUpdate:User=Object.assign({},this.user)
    let userUpdate: User = {
      ...this.user,
      firstName: this.editUserForm.value.firstName,
      lastName: this.editUserForm.value.lastName,
      userName: this.editUserForm.value.userName,
      cin: this.editUserForm.value.cin,
      phone: this.editUserForm.value.phone,
    };

    this.userService.updateUser(userUpdate, this.user.id).subscribe(result => {
      this.authService.updateConnectedUser(result);
      this.initParamsUser();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Données modifiés avec succés',
        showConfirmButton: false,
        timer: 1500
      })

    }, error => {
      console.log("update error", error)
      Swal.fire('Erreur', error, 'error');
    });
  }
  // getimage(){
  //   this.userService.getuserimage(this.user.imageURL).subscribe(res=>{
  //     this.image=res
  //     console.log(this.image)
  //   })
  // }
  logout() {
    this.authService.logout();
    this.initParamsUser();
  }
}

