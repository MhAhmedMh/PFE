import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayaoutComponent } from 'src/app/shared/components/main-layaout/main-layaout.component';
import { ConversationsComponent } from './conversations/conversations.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayaoutComponent,
    children: [
      {
        path: ':id',
        component:ConversationsComponent,
        
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversationRoutingModule { }
