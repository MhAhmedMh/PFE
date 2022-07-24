import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

export class StudentsListComponent implements OnInit {

  studentData!:any;
  count:number=0;
  page:number=1;
  tableSize:number=5;
  tableSizes:any=[3,6,9,12];

  constructor(private usersService: UsersService, ) { }

  ngOnInit(): void {
    this.getAllStudents();
  }
  getAllStudents(){
    this.usersService.getStudents().subscribe(res=>{
      this.studentData = res;
      console.log(this.studentData[1].imageURL)

    })
  }
  onTableDataChange(event:any){
    this.page = event;
    this.getAllStudents();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllStudents();
  }

}
