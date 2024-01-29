import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, tap } from 'rxjs';

const url = 'http://localhost:3000/burgers';

export interface Burger {
  id: number;
  title: string;
  meat: string;
  bread: string;
  ingredients: [];
}

@Injectable({ providedIn: 'root' })
export class BurgerService {

  


  //BehaviorSubject ascolta e prende gli ultimi eventi
  private burgerSource = new BehaviorSubject<any>(null);
  currentBurger = this.burgerSource.asObservable();

  private orderedBurgers: Burger[] = [];

  //prova
  private STORAGE_KEY = 'orderedBurgers';
  //------------

  constructor(private http: HttpClient) {
    //prova
    // Carica dati salvati da localStorage al momento dell'inizializzazione del servizio
    const storedBurgers = localStorage.getItem(this.STORAGE_KEY);
    this.orderedBurgers = storedBurgers ? JSON.parse(storedBurgers) : [];
    //------------------------------
  }






  fetchBurgers() {
    return this.http.get<Burger[]>(url).pipe(
      tap((x) => console.table(x)),
      delay(1500)
    );
  }

  sendBurger(burger: any) {
    this.orderedBurgers.push(burger);
    this.burgerSource.next(burger);
    this.saveToLocalStorage();
  }

  getOrderedBurgers() {
    return this.orderedBurgers;
  }


  private saveToLocalStorage() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.orderedBurgers));
  }

  clearOrderedBurgers() {
    this.orderedBurgers = [];
    this.saveToLocalStorage();
  }


  removeOrder(index: number) {
    this.orderedBurgers.splice(index, 1);
    this.saveToLocalStorage();
  }


  

  
}
