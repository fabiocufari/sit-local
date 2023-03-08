import { Component, OnInit } from '@angular/core';
import { pipe, take } from 'rxjs';
import { colType } from 'src/app/shared/components/custom-table/colType.enum';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-consultazione-esito-acquisizione',
  templateUrl: './consultazione-esito-acquisizione.component.html',
  styleUrls: ['./consultazione-esito-acquisizione.component.scss'],
})
export class ConsultazioneEsitoAcquisizioneComponent implements OnInit {
  clickInfo: any;



  constructor(public modal :ModalService) { }

  headers = [
    {head:'Agenzia',type:colType.string},
    {head:'Data/ora invio',type:colType.string},
    {head:'Tipo di file',type:colType.string},
    {head:'Totale inviati',type:colType.number},
    {head:'Totale elaborati',type:colType.number},
    {head:'Totale Scartati',type:colType.number},
    {head:'Totale Disall Anagr',type:colType.number},
    {head:'File inviato',type:colType.downloadLink},
    {head:'File esito',type:colType.downloadLink},
     //{head:'Button Test',type:colType.button},
  ]


  data = [
      //['Lazio','30/09/2023 18:45','Anagrafe',1,3,2,2,{title:'fileAnagrafica.txt',link:'/funzioni-registro-nazionale-dializzati'},{title:'120_A_2023_20230124_141544.txt',link:'routing'},[{title:'Button',action:'deleteButton',icon:'upload'},{title:'Prova',action:'editButton',icon:'upload'}]],
      ['Lazio','30/09/2023 18:45','Anagrafe',1,3,2,2,{title:'fileAnagrafica.txt',link:'/funzioni-registro-nazionale-dializzati'},{title:'120_A_2023_20230124_141544.txt',link:'routing'}],
      ['Lazio','30/09/2023 18:45','Anagrafe',1,3,2,2,{title:'fileAnagrafica.txt',link:'/funzioni-registro-nazionale-dializzati'},{title:'120_A_2023_20230124_141544.txt',link:'routing'}],
      ['Lazio','30/09/2023 18:45','Anagrafe',1,3,2,2,{title:'fileAnagrafica.txt',link:'/funzioni-registro-nazionale-dializzati'},{title:'120_A_2023_20230124_141544.txt',link:'routing'}],
      ['Lazio','30/09/2023 18:45','Anagrafe',1,3,2,2,{title:'fileAnagrafica.txt',link:'/funzioni-registro-nazionale-dializzati'},{title:'120_A_2023_20230124_141544.txt',link:'routing'}],
      ['Lazio','30/09/2023 18:45','Anagrafe',1,3,2,2,{title:'fileAnagrafica.txt',link:'/funzioni-registro-nazionale-dializzati'},{title:'120_A_2023_20230124_141544.txt',link:'routing'}],


  ]


  ngOnInit(): void {

  }

  clickEvent(e: any){
    console.log(e)
    this.clickInfo={id: e.id,action :e.action}
    this.modal.display(true,'titolo '+e.action)
    this.modal.response.pipe(take(2)).subscribe(x=>{
      this.modal.display(false,'titolo')
      console.log(x)
    })


  }

}
