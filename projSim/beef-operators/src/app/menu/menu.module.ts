import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { BurgerCardComponent } from './components/burger-card/burger-card.component';
import { ListaComponent } from './components/lista/lista.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterPipe } from './filter.pipe';




@NgModule({
  declarations: [
    HomeComponent,
    BurgerCardComponent,
    ListaComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MenuModule { }
