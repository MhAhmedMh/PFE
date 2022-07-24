import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConvService } from 'src/app/shared/services/conv.service';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit {
  id:string=this.AR.snapshot.params['id'];
  member!:any;
  element!:any;
  convos!:[];
  constructor(private convService:ConvService,private messageService:MessageService,private AR:ActivatedRoute) { }

  ngOnInit(): void {
    this.creatConv();
    // this.getMessages();
  }


creatConv(){
  this.convService.getUserConv(this.id).subscribe((res)=>{
    // this.convos=res
    // console.log('userConvos',this.convos)
    res.forEach((element: any) => { 
      this.convos=element
      
    });
    console.log(this.convos)
  })
}
// getMessages(){
//   this.messageService.getMessage(this.convId).subscribe((res)=>{
//     console.log('message',res)
//   })
// }

}
