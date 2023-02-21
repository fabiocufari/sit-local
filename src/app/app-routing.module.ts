import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
{
  path: 'funzioni-registro-nazionale-dializzati',
  loadChildren: () => import('./pages/funzioni-registro-nazionale-dializzati/funzioni-registro-nazionale-dializzati.module').then(m => m.FunzioniRegistroNazionaleDializzatiModule)
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
