import { Injectable } from '@angular/core';
export interface Panino {
  id: number;
  nome: string;
  pane: string;
  carne: string;
  salsa: string;
}

@Injectable({
  providedIn: 'root',
})
export class P2ServiceService {
  constructor() {}
}
