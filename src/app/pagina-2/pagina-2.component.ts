import { Component, OnInit } from '@angular/core';
import { P2ServiceService, Panino } from './p2-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagina-2',
  templateUrl: './pagina-2.component.html',
  styleUrls: ['./pagina-2.component.css']
})
export class Pagina2Component  implements OnInit {

panino : Panino = {
  id : 1 ,
  nome : "panino 1" , 
  pane: "integrale",
  carne : "pollo",
  salsa : "bbq "
}


paninoList$! : Observable<Panino[]>  

constructor(private servizio : P2ServiceService) {




}
  ngOnInit(): void {
    
  }






}
