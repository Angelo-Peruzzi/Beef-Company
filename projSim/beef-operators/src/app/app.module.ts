import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from './menu/menu.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdiniComponent } from './ordini/ordini.component'
import { BurgerService } from './menu/burger.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdiniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MenuModule
  ],
  providers: [BurgerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
