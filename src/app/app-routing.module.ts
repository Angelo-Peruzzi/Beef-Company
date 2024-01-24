import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './pagina-2/pagina-2.component';
import { Pagina1Component } from './pagina-1/pagina-1.component';

const routes: Routes = [
  { path:"ordini", component: Pagina2Component},
  { path:"", component: Pagina1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
