import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-students-pending-list',
  templateUrl: './students-pending-list.component.html',
  styleUrls: ['./students-pending-list.component.scss']
})
export class StudentsPendingListComponent implements OnInit {
  teacherData!:any;

  constructor(private userService: UsersService, ) { }
  count:number=0;
  page:number=1;
  tableSize:number=5;
  tableSizes:any=[3,6,9,12];
  ngOnInit(): void {
    this.getAllPendingStudents();
  }
  getAllPendingStudents(){
    this.userService.getPendingStudents().subscribe(res=>{
      this.teacherData = res;
    })
  }

  rejectUser(e:any){
    this.userService.deleteUser(e.id).subscribe(res=>{
      alert("user rejected")
    })

  }
  updateStatus(e:any){
    let isActive="true";
    this.userService.updateUserStatus(isActive,e.id).subscribe(res=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Etudiant confirmé avec succès',
        showConfirmButton: false,
        timer: 2000
      })
      this.getAllPendingStudents();
    })
  }
  onTableDataChange(event:any){
    this.page = event;
    this.getAllPendingStudents();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllPendingStudents();
  }

}
