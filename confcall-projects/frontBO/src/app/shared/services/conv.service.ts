import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConvService {

  constructor(private client: HttpClient) { }
 
  getUserConv(id: string) {
    return this.client.get<any>(environment.baseUrl + 'conversation?members=' + id)
  }
  
}
