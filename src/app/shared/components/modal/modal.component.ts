import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  
  isOpen={"status": false}
  

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.modalService.status.subscribe((val: boolean) => {
      this.isOpen = {"status": val};
  });
  }

}
