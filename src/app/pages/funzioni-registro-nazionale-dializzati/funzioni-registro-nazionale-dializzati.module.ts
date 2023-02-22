import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunzioniRegistroNazionaleDializzatiRoutingModule } from './funzioni-registro-nazionale-dializzati-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AcquisizioneDatiRegistroRegionaleComponent } from './acquisizione-dati-registro-regionale/acquisizione-dati-registro-regionale.component';
import { ConsultazioneEsitoAcquisizioneComponent } from './consultazione-esito-acquisizione/consultazione-esito-acquisizione.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    MainComponent,
    AcquisizioneDatiRegistroRegionaleComponent,
    ConsultazioneEsitoAcquisizioneComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    FunzioniRegistroNazionaleDializzatiRoutingModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports :[TranslateModule]
})
export class FunzioniRegistroNazionaleDializzatiModule { }
