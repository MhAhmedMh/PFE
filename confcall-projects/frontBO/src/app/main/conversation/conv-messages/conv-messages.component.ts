import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConvService } from 'src/app/shared/services/conv.service';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-conv-messages',
  templateUrl: './conv-messages.component.html',
  styleUrls: ['./conv-messages.component.scss']
})
export class ConvMessagesComponent implements OnInit {
  id:string=this.AR.snapshot.params['id'];

  constructor(private convService:ConvService,private messageService:MessageService,private AR:ActivatedRoute) { }

  ngOnInit(): void {

  }


}
