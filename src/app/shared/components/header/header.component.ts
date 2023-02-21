import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLang: string='it';

  constructor(public translate : TranslateService) { }

  ngOnInit(): void {
  
    this.currentLang=this.translate.defaultLang
  }

  changeLanguage(lang:string){
  
    this.translate.use(lang)
    this.currentLang=this.translate.currentLang
    
  }
}
