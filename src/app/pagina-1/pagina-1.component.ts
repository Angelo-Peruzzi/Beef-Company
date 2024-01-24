import { Component } from '@angular/core';



@Component({
  selector: 'app-pagina-1',
  templateUrl: './pagina-1.component.html',
  styleUrls: ['./pagina-1.component.css']
})
export class Pagina1Component {

  title = 'Beef-Company';
  magicOrder(): void {
    alert("gay");
  }


  chosenBread: string = "Nessuna selezione";
  breadChoice(s: string): void {
    console.log("pane selezionato: " + s);
    this.chosenBread = s;
    this.getBread();
  }
  getBread(): string {
    return this.chosenBread;
  }

  chosenContent: string = "Nessuna selezione";
  contentChoice(s: string): void {
    console.log("content selezionato: " + s);
    this.chosenContent = s;
  }
  getContent(): string {
    return this.chosenContent;
  }

  chosenSauce: string = "Nessuna selezione";
  sauceChoice(s: string): void {
    console.log("salsa selezionata: " + s);
    this.chosenSauce = s;
  }
  getSauce():string{
    return this.chosenSauce;
  }





  //panini stock



}
