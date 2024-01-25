import { Injectable } from '@angular/core';
import { Panino } from '../pagina-2/p2-service.service';

// export interface Panino {
//   id: number;
//   nome : string ;
//   pane : string ; 
//   carne : string ;
//   salsa : string;
// }


 







@Injectable({
  providedIn: 'root'
})
export class Pg1Service {





   ciao :  Panino = {
     id: 0,
     nome: '',
     pane: '',
     carne: '',
     salsa: ''
   }

  //  constructor( private  http : HttpClient) {}


  //  fetchAll() {
  //    // { params: new HttpParams().append("userId", 2) }
  //    return this.http.get<Panino[]>(`${endpoint}`,{ responseType : "json", observe:"body"}).pipe(tap((x)=> console.log(x))
  //    )
  //  }

}
