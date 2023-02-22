import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {
  @Input("title") title:string=''
  @Input("icon") icon:string=''
  @Input("link") link:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
