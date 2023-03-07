import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InserimentoNuovaDichiarazioneVolontaComponent } from './inserimento-nuova-dichiarazione-volonta/inserimento-nuova-dichiarazione-volonta.component';


const routes: Routes = [
  {
    path: 'inserimento-dichiarazione-volonta',
    component: InserimentoNuovaDichiarazioneVolontaComponent
  },
  {
  path: '',
  component: MainComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class DichiarazioniDiVolontaRoutingModule { }
