import { Element } from '@angular/compiler';
import { AfterViewInit, Component,  ElementRef,  OnInit, TemplateRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit,AfterViewInit{
  
  title=''
  isOpen={"status": false}
  response: any
	@ViewChild("modal") modal: TemplateRef<any> | undefined;
  myModal!: bootstrap.Modal;
  constructor(public modalService: ModalService) {
  }
  
  
  ngOnInit(): void {
    

    this.modalService.status.subscribe((val: boolean) => {
     
      if (this.modal) {  this.myModal.show() }
     
      console.log(val)
     
      this.title=this.modalService.title
      
    });
  }
  ngAfterViewInit(){
    if (this.modal) {
      this.myModal = new bootstrap.Modal('#modal', {
        keyboard: false,
      })
    }
 }
  onClose(e: any){
    this.modalService.setResponse(this.response)
  }

}
