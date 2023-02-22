import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-custom-upload',
  templateUrl: './custom-upload.component.html',
  styleUrls: ['./custom-upload.component.scss'],
})
export class CustomUploadComponent implements OnInit {
  @Input("title") title:string=''
  constructor() { }

  ngOnInit(): void {

  }
}
