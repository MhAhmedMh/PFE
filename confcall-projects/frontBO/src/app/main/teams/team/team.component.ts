import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  id:string=this.AR.snapshot.params['id'];
  name:string=this.AR.snapshot.params['name']
  constructor(private AR:ActivatedRoute  ) { }

  ngOnInit(): void {
    // console.log(this.AR.snapshot.params['id'])
    // console.log(this.id)
  }

}
