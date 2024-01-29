import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './menu/components/home/home.component';
import { OrdiniComponent } from './ordini/ordini.component';

const routes: Routes = [
  { path:"ordini", component: OrdiniComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
