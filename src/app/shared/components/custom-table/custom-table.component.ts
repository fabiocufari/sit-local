import { Component, EventEmitter, Input, Output } from '@angular/core';
import { colType } from './colType.enum';
@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {
  @Input() headers: any[] = [];
  @Input() data: any[] = [];

  @Output() clickEvent = new EventEmitter<any>();

  colType=colType
  


  buttonClick(row: any,action :string){
    this.clickEvent.emit({id : row,action :action})
  }

}
