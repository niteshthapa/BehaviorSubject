import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingData  {
  
  name = new BehaviorSubject <string>(null);
  constructor() { 
  
  }
  sendMessage(msg:string){
    this.name.next(msg)
  }

}
