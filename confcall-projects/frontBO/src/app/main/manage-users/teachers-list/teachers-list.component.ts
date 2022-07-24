import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent implements OnInit {
teacherData!:any;

  constructor(private usersService: UsersService, ) { }
  count:number=0;
  page:number=1;
  tableSize:number=5;
  tableSizes:any=[3,6,9,12];
  ngOnInit(): void {
    this.getAllTeachers();
  }
  getAllTeachers(){
    this.usersService.getTeachers().subscribe(res=>{
      this.teacherData = res;
    })
  }
  onTableDataChange(event:any){
    this.page = event;
    this.getAllTeachers();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllTeachers();
  }

}
