import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-custom-upload',
  templateUrl: './custom-upload.component.html',
  styleUrls: ['./custom-upload.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class CustomUploadComponent implements OnInit {
  @Input("title") title:string=''
  @Input("fileType") fileType:string=''
  @Input("validation") validation:boolean=false
  @Input("controlName") controlName: string='';
  @Input("defaultPlaceholder") defaultPlaceholder: string='';


  constructor() { }

  ngOnInit(): void {

  }

  getFileDetails (event:any) {
    for (var i = 0; i < event.target.files.length; i++) { 
      var name = event.target.files[i].name;
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;
      //funzione probabilmente utile in futuro per validare il file caricato nelle sue informazioni
      console.log ('Name: ' + name + "\n" + 
        'Tipo: ' + type + "\n" +
        'Ultima modifica: ' + modifiedDate + "\n" +
        'Dimensione : ' + Math.round(size / 1024) + " KB");
    }
  }
  // rimuove fakepath dal percorso file
  cleanName(value:any){
    return value.match(/[^\\/]*$/)[0]
  }
}
