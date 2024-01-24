import { Component, OnInit } from '@angular/core';
import { P2ServiceService, Panino } from './p2-service.service';
import { Observable, tap } from 'rxjs';
import { HttpEvent } from '@angular/common/http';


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
  // ngOnInit(): void {
  // this.servizio.fetchAll().subscribe(){
  //   next : (lista : Panino[]) => {},
  //  Error: (err : any) =>  {}, 
  // complete :  () =>  {
  // console.log("fetch completed")}
  //       }
  // }
  // }



  ngOnInit(): void {
    
    this.servizio.fetchAll().subscribe({
      next : (lista : Panino[]) => {
        this.panini = lista ; 
      },
      error: (err : any) =>  {},
      complete: () =>  {
        console.log("fetch completed")}
       })


      }


     onclick(event : Event){
      this.panini.splice(0,1)
     }




    }
   


