import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'funzioni-registro-nazionale-dializzati',
  loadChildren: () => import('./pages/funzioni-registro-nazionale-dializzati/funzioni-registro-nazionale-dializzati.module').then(m => m.FunzioniRegistroNazionaleDializzatiModule)
},
{
  path: 'dichiarazioni-di-volonta',
  loadChildren: () => import('./pages/dichiarazioni-di-volonta/dichiarazioni-di-volonta.module').then(m => m.DichiarazioniDiVolontaModule)
},
{
  path: '',
  redirectTo: 'funzioni-registro-nazionale-dializzati',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
