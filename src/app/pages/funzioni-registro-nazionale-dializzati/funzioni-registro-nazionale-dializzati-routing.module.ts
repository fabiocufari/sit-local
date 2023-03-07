import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AcquisizioneDatiRegistroRegionaleComponent } from './acquisizione-dati-registro-regionale/acquisizione-dati-registro-regionale.component';
import { ConsultazioneEsitoAcquisizioneComponent } from './consultazione-esito-acquisizione/consultazione-esito-acquisizione.component';
import { EsportazioneRegistroDializzatiComponent } from './esportazione-registro-dializzati/esportazione-registro-dializzati.component';

const routes: Routes = [
  {
    path: 'acquisizione-dati-registro-regionale',
    component: AcquisizioneDatiRegistroRegionaleComponent, data: { breadcrumb: 'Acquisizione dati Registro Regionale', level: 2 } 
  },
  {
  path: 'consultazione-esito-acquisizione',
  component: ConsultazioneEsitoAcquisizioneComponent, data: { breadcrumb: 'Consultazione Esito Acquisizione', level: 2 } 
  },
  {
  path: 'esportazione-registro-dializzati',
  component: EsportazioneRegistroDializzatiComponent, data: { breadcrumb: 'Esportazione Dati Registro Dializzati', level: 2 } 
  },
  {
  path: '',
  component: MainComponent, data: { breadcrumb: 'Navigazione', level: 2 } 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunzioniRegistroNazionaleDializzatiRoutingModule { }
