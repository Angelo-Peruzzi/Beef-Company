import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

export interface Panino {
  id: number;
  nome: string;
  pane: string;
  carne: string;
  salsa: string;
}


const  endpoint = "http://localhost:3000/panini"


@Injectable({
  providedIn: 'root',
})
export class P2ServiceService {

  


  constructor( private  http : HttpClient) {}


  fetchAll() {
    // { params: new HttpParams().append("userId", 2) }
    return this.http.get<Panino[]>(`${endpoint}`,{ responseType : "json", observe:"body"}).pipe(tap((x)=> console.log(x))
    )
  }}
