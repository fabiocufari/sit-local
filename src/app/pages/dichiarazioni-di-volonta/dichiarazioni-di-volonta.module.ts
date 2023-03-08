import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { InserimentoNuovaDichiarazioneVolontaComponent } from './inserimento-nuova-dichiarazione-volonta/inserimento-nuova-dichiarazione-volonta.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DichiarazioniDiVolontaRoutingModule } from './dichiarazioni-di-volonta-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MainComponent,
    InserimentoNuovaDichiarazioneVolontaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    DichiarazioniDiVolontaRoutingModule,
    ReactiveFormsModule
  ],
  schemas : [],
  exports :[TranslateModule]
})
export class DichiarazioniDiVolontaModule { }
