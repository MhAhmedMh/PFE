import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teachers-pending-list',
  templateUrl: './teachers-pending-list.component.html',
  styleUrls: ['./teachers-pending-list.component.scss']
})
export class TeachersPendingListComponent implements OnInit {
  count:number=0;
  page:number=1;
  tableSize:number=5;
  tableSizes:any=[3,6,9,12];
  teacherData!:any;
  user!: User;
  isActive!:boolean;
  constructor(private userService: UsersService, ) { }

  ngOnInit(): void {
    this.getAllPendingTeachers();
  }
  getAllPendingTeachers(){
    this.userService.getPendingTeachers().subscribe(res=>{
      this.teacherData = res;
    })
  }
  rejectUser(e:any){
    this.userService.deleteUser(e.id).subscribe(res=>{
      alert("user rejected")
      this.getAllPendingTeachers();
    })
  }
  updateStatus(e:any){
    let isActive="true";
    this.userService.updateUserStatus(isActive,e.id).subscribe(res=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Enseignant confirmé avec succès',
        showConfirmButton: false,
        timer: 1500
      })
      this.getAllPendingTeachers();
    })
  
  }
  onTableDataChange(event:any){
    this.page = event;
    this.getAllPendingTeachers();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllPendingTeachers();
  }
}
