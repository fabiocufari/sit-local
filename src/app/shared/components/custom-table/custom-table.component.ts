import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { colType } from './colType.enum';
declare var bootstrap: any;
@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements AfterViewInit{
  @Input() headers: any[] = [];
  @Input() data: any[] = [];

  @Output() clickEvent = new EventEmitter<any>();

  colType=colType
  
  ngAfterViewInit() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })     
  }
  ngOnInit(){
  
  }
  buttonClick(row: any,action :string){
    this.clickEvent.emit({id : row,action :action})
  }
  
}
