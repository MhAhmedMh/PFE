import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private client: HttpClient) { }
  
  getMessage(id: string) {
    return this.client.get<any>(environment.baseUrl + 'message/'+ id)
  }
}
