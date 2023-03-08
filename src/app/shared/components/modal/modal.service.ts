import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public title=''
  public status: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  public response: BehaviorSubject<any> = new BehaviorSubject<any>('');
    display(value: boolean,title:string) {
     
        this.title=title
        this.status.next(value);
       
    }

    setResponse(value: string) {
      this.response.next(value);
  }
}
