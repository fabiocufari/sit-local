import { Component, OnInit } from '@angular/core';
import { colType } from 'src/app/shared/components/custom-table/colType.enum';
@Component({
  selector: 'app-consultazione-esito-acquisizione',
  templateUrl: './consultazione-esito-acquisizione.component.html',
  styleUrls: ['./consultazione-esito-acquisizione.component.scss']
})
export class ConsultazioneEsitoAcquisizioneComponent implements OnInit {
  clickInfo: any;

  //Headers della tabella
  // headers: any[] = [
  //   {
  //     "key": "col1",
  //     "header": "Agenzia",
  //     "sortable": true,
  //     "type": "default"
  //   },
  //   {
  //     "key": "col2",
  //     "header": "Data/ora invio",
  //     "type": "date",
  //     "sortable": true
  //   },
  //   {
  //     "key": "col3",
  //     "header": "Tipo di File",
  //     "sortable": true,
  //     "type": "default"
  //   },
  //   {
  //     "key": "col4",
  //     "header": "Totale Inviati",
  //     "sortable": true,
  //     "type": "number"
  //   },
  //   {
  //     "key": "col5",
  //     "header": "Totale Elaborati",
  //     "sortable": true,
  //     "type": "number"
  //   },
  //   {
  //     "key": "col6",
  //     "header": "Totale Scartati",
  //     "sortable": true,
  //     "type": "number"
  //   },
  //   {
  //     "key": "col7",
  //     "header": "Totale Disall Anagr",
  //     "sortable": true,
  //     "type": "number"
  //   },
  //   {
  //     "key": "col8",
  //     "header": "File Inviato",
  //     "sortable": true,
  //     "type": "link"
  //   },
  //   {
  //     "key": "col9",
  //     "header": "File Esito",
  //     "sortable": true,
  //     "type": "link"
  //   },
  // ]

  // //Valori della tabella
  // data: any[] = [
  //   /* row 1*/
  //   {
  //   "col1": {
  //     "value": "Lazio"
  //   },
  //   "col2": {
  //     "value": "2015-09-30T22:00:00.000Z",
  //     "stringifiedValue": "10/1/2015"
  //   },
  //   "col3": {
  //     "value": "Anagrafe"
  //   },
  //   "col4": {
  //     "value": "3",
  //     "stringifiedValue":"3"
  //   },
  //   "col5": {
  //     "value": "1",
  //     "stringifiedValue":"1"
  //   },
  //   "col6": {
  //     "value": "0",
  //     "stringifiedValue":"0"
  //   },
  //   "col7": {
  //     "value": "0",
  //     "stringifiedValue":"0"
  //   },
  //   "col8": {
  //     "value": "FileAnagrafica.txt",
  //     "action": {
  //       "url": "#"
  //     }
  //   },
  //   "col9": {
  //     "value": "120_A_2023_20230124_141544.txt",
  //     "action": {
  //       "url": "#"
  //     }
  //   },
  // },
  // //row 2
  // {
  //   "col1": {
  //     "value": "Lazio"
  //   },
  //   "col2": {
  //     "value": "2015-09-30T22:00:00.000Z",
  //     "stringifiedValue": "10/1/2015"
  //   },
  //   "col3": {
  //     "value": "Anagrafe"
  //   },
  //   "col4": {
  //     "value": "3",
  //     "stringifiedValue":"3"
  //   },
  //   "col5": {
  //     "value": "1",
  //     "stringifiedValue":"1"
  //   },
  //   "col6": {
  //     "value": "0",
  //     "stringifiedValue":"0"
  //   },
  //   "col7": {
  //     "value": "0",
  //     "stringifiedValue":"0"
  //   },
  //   "col8": {
  //     "value": "FileAnagrafica.txt",
  //     "action": {
  //       "url": "#"
  //     }
  //   },
  //   "col9": {
  //     "value": "120_A_2023_20230124_141544.txt",
  //     "action": {
  //       "url": "#"
  //     }
  //   },
  // },
  // //row 3
  // {
  //   "col1": {
  //     "value": "Lazio"
  //   },
  //   "col2": {
  //     "value": "2015-09-30T22:00:00.000Z",
  //     "stringifiedValue": "10/1/2015"
  //   },
  //   "col3": {
  //     "value": "Anagrafe"
  //   },
  //   "col4": {
  //     "value": "3",
  //     "stringifiedValue":"3"
  //   },
  //   "col5": {
  //     "value": "1",
  //     "stringifiedValue":"1"
  //   },
  //   "col6": {
  //     "value": "0",
  //     "stringifiedValue":"0"
  //   },
  //   "col7": {
  //     "value": "0",
  //     "stringifiedValue":"0"
  //   },
  //   "col8": {
  //     "value": "FileAnagrafica.txt",
  //     "action": {
  //       "url": "#"
  //     }
  //   },
  //   "col9": {
  //     "value": "120_A_2023_20230124_141544.txt",
  //     "action": {
  //       "url": "#"
  //     }
  //   },
  // }
  // ]

  constructor() { }

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
    {head:'Button Test',type:colType.button},
  ]


  data = [
      ['Lazio','30/09/2023 18:45','Anagrafe',1,3,2,2,{title:'fileAnagrafica.txt',link:'/funzioni-registro-nazionale-dializzati'},{title:'120_A_2023_20230124_141544.txt',link:'routing'},{title:'Button',action:'deleteButton',icon:'upload'}],
      ['Lazio','30/09/2023 18:45','Anagrafe',1,3,2,2,{title:'fileAnagrafica.txt',link:'/funzioni-registro-nazionale-dializzati'},{title:'120_A_2023_20230124_141544.txt',link:'routing'},{title:'Button',action:'deleteButton',icon:'upload'}],
      ['Lazio','30/09/2023 18:45','Anagrafe',1,3,2,2,{title:'fileAnagrafica.txt',link:'/funzioni-registro-nazionale-dializzati'},{title:'120_A_2023_20230124_141544.txt',link:'routing'},{title:'Button',action:'deleteButton',icon:'upload'}],
      ['Lazio','30/09/2023 18:45','Anagrafe',1,3,2,2,{title:'fileAnagrafica.txt',link:'/funzioni-registro-nazionale-dializzati'},{title:'120_A_2023_20230124_141544.txt',link:'routing'},{title:'Button',action:'deleteButton',icon:'upload'}],
      ['Lazio','30/09/2023 18:45','Anagrafe',1,3,2,2,{title:'fileAnagrafica.txt',link:'/funzioni-registro-nazionale-dializzati'},{title:'120_A_2023_20230124_141544.txt',link:'routing'},{title:'Button',action:'deleteButton',icon:'upload'}],
      ['Lazio','30/09/2023 18:45','Anagrafe',1,3,2,2,{title:'fileAnagrafica.txt',link:'/funzioni-registro-nazionale-dializzati'},{title:'120_A_2023_20230124_141544.txt',link:'routing'},{title:'Button',action:'deleteButton',icon:'upload'}],
  
   
  ]

  
  ngOnInit(): void {

  }

  clickEvent(e: any){
    console.log(e)
    this.clickInfo={id: e.id,action :e.action}

  }

}
