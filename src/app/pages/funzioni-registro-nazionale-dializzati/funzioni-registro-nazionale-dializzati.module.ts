import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunzioniRegistroNazionaleDializzatiRoutingModule } from './funzioni-registro-nazionale-dializzati-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AcquisizioneDatiRegistroRegionaleComponent } from './acquisizione-dati-registro-regionale/acquisizione-dati-registro-regionale.component';
import { ConsultazioneEsitoAcquisizioneComponent } from './consultazione-esito-acquisizione/consultazione-esito-acquisizione.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EsportazioneRegistroDializzatiComponent } from './esportazione-registro-dializzati/esportazione-registro-dializzati.component';
import { ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    MainComponent,
    AcquisizioneDatiRegistroRegionaleComponent,
    ConsultazioneEsitoAcquisizioneComponent,
    EsportazioneRegistroDializzatiComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
    FunzioniRegistroNazionaleDializzatiRoutingModule
  ],
  schemas : [],
  exports :[TranslateModule],
 
})
export class FunzioniRegistroNazionaleDializzatiModule { }
