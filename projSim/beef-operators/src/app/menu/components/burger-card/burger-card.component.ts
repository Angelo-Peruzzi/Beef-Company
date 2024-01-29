import { Component, Input, OnInit } from '@angular/core';
import { Burger } from '../../burger.model';
import { BurgerService } from '../../burger.service';

@Component({
  selector: 'app-burger-card',
  templateUrl: './burger-card.component.html',
  styleUrls: ['./burger-card.component.css']
})
export class BurgerCardComponent  {

  @Input('to-display') burger: Burger = {
    id: '',
    title: "",
    meat: "",
    bread: "",
    ingredients: []
  }


//prova
constructor(private burgerService: BurgerService) {}

inviaBurger() {
  this.burgerService.sendBurger(this.burger);
}


  




}
