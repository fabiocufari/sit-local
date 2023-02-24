import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AcquisizioneDatiRegistroRegionaleComponent } from './acquisizione-dati-registro-regionale/acquisizione-dati-registro-regionale.component';
import { ConsultazioneEsitoAcquisizioneComponent } from './consultazione-esito-acquisizione/consultazione-esito-acquisizione.component';
import { EsportazioneRegistroDializzatiComponent } from './esportazione-registro-dializzati/esportazione-registro-dializzati.component';

const routes: Routes = [
  {
    path: 'acquisizione-dati-registro-regionale',
    component: AcquisizioneDatiRegistroRegionaleComponent
  },
  {
  path: 'consultazione-esito-acquisizione',
  component: ConsultazioneEsitoAcquisizioneComponent
  },
  {
  path: 'esportazione-registro-dializzati',
  component: EsportazioneRegistroDializzatiComponent
  },
  {
  path: '',
  component: MainComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunzioniRegistroNazionaleDializzatiRoutingModule { }
