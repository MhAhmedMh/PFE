import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { ForgotPwdVM } from '../models/viewModels/forgotPwdVM';
import { ResetPwdVM } from '../models/viewModels/resetPwdVM';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private client: HttpClient) {}

  getAllUsers() {
    return this.client.get<User[]>(environment.baseUrl + 'users');
  }

  getTeachers(){
    return this.client.get<any>(environment.baseUrl+"users/teachers")
    .pipe(map((res:any)=>{
      return res ;
    }))
   }
   getPendingTeachers(){
    return this.client.get<any>(environment.baseUrl+"users/teachers/pending")
    .pipe(map((res:any)=>{
      return res ;
    }))
   }
   getStudents(){
    return this.client.get<any>(environment.baseUrl+"users/students")
    .pipe(map((res:any)=>{
      return res ;
    }))
   }
   getPendingStudents(){
    return this.client.get<any>(environment.baseUrl+"users/students/pending")
    .pipe(map((res:any)=>{
      return res ;
    }))
   }
     

  getOneUsers(id: string) {
    return this.client.get<User[]>(environment.baseUrl + 'users/' + id);
  }

  updateUser(data: User, id: string) {
    return this.client.put<User>(environment.baseUrl + 'users/' + id, data);
    // .pipe(
    //   map((res: any) => {
    //     return res;
    //   })
    // );
  }
  updateUserStatus(data:any,id:string){
    return this.client.put<User>(environment.baseUrl + 'users/status/' + id, data);
  }
 

  deleteUser(id: string) {
    return this.client.delete<any>(environment.baseUrl + 'users/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  signup(user: User) {
    return this.client.post<any>(environment.baseUrl + 'users/auth/signup', user);
  }

  forgotPwd(forgotPwdVM: ForgotPwdVM) {
    return this.client.put<any>(
      environment.baseUrl + 'users/auth/forgot-password',
      forgotPwdVM
    );
  }

  resetPwd(resetPwdVM: ResetPwdVM) {
    return this.client.put<any>(
      environment.baseUrl + 'users/auth/reset-password',
      resetPwdVM
    );
  }
  updateUserPassword( data:any,id:string){
    return this.client.put<User>(environment.baseUrl +'users/updatePassword/'+ id ,data);
  }
  getuserimage(imageURL:any){
    return this.client.get(environment.baseUrl+imageURL,{responseType: 'json'});
  }
  uploadImage(id:string,image:any) {
   return this.client.put<any>(environment.baseUrl +'users/image/'+id, image)
  }
}
