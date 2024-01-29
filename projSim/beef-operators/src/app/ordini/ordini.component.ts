import { Component, OnInit } from '@angular/core';
import { BurgerService ,  } from '../menu/burger.service';
import { Burger } from '../menu/burger.model';


@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.css']
})
export class OrdiniComponent implements OnInit {

  // burgers:Burger[]=[];
  burgers: any;



  //prova

  orderedBurgers: Burger[] = [];





  constructor(private service : BurgerService){

    //prova
    this.orderedBurgers = this.service.getOrderedBurgers();
    
  }


  
  ngOnInit(): void {

    this.service.fetchBurgers().subscribe({
      next:(lista : Burger[]) => {this.burgers =lista;},
      error : (err : any) =>  {},
      complete: () =>  {
        console.log("fetch completed")}
     
       })

    }



    clearOrder(index: number) {
      this.service.removeOrder(index);
      this.orderedBurgers.splice(index, 1); // Rimuovi anche dall'array locale per aggiornare la vista
    }


//bottone che cancella gli ordini effetttuati
    onclick(event : Event){
      this.orderedBurgers.splice(0,1);
      
      
      
      
     }

    
  }





  

