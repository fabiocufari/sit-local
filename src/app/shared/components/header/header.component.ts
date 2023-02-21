import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import { ModalService } from '../modal/modal.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLang: string='it';

  constructor(public translate : TranslateService,
              private modalService: ModalService) { }

  ngOnInit(): void {
  
    this.currentLang=this.translate.defaultLang
   /*  this.modalService.display(true,"Prova")
    this.modalService.response.pipe(take(2)).subscribe( res => {
      console.log(res)
    }) */
  }

  changeLanguage(lang:string){
  
    this.translate.use(lang)
    this.currentLang=this.translate.currentLang
    
  }
}
