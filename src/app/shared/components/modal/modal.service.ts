import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public status: BehaviorSubject<any> = new BehaviorSubject<any>(false);

    display(value: boolean) {
        this.status.next({"status":value});
    }
}
