import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationRoutingModule } from './conversation-routing.module';
import { ConversationsComponent } from './conversations/conversations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConvMessagesComponent } from './conv-messages/conv-messages.component';


@NgModule({
  declarations: [
    ConversationsComponent,
    ConvMessagesComponent
  ],
  imports: [
    CommonModule,
    ConversationRoutingModule,
    SharedModule
  ]
})
export class ConversationModule { }
