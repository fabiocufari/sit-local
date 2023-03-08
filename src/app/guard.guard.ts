
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService } from './shared/components/modal/modal.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private modalService: ModalService
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (false) {
      return true;
    } else {
      this.modalService.display(true,"titolo");
      
      return false;
    }
  }

}