import { Component, OnInit } from '@angular/core';
import { P2ServiceService, Panino } from './p2-service.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-pagina-2',
  templateUrl: './pagina-2.component.html',
  styleUrls: ['./pagina-2.component.css']
})
export class Pagina2Component  implements OnInit {



panini : Panino[] = [];





paninoList$! : Observable<Panino[]>  




constructor(private servizio : P2ServiceService) {


  } 
  ngOnInit(): void {
   this.paninoList$ = this.servizio.fetchAll()
  }
  // ngOnInit(): void {
  //   this.P2ServiceService.fetchAll().subscribe({
  //     next : (lista : Panino[]) => {},
  //     error: (err : any) =>  {},
  //     complete: () =>  {
  //       console.log("fetch completed")}
  //     })
  

  }
  




