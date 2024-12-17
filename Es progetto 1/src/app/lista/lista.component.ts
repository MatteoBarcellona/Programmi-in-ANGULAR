import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  // Array per la lista di elementi
  items: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  // Variabile per il nuovo elemento
  newItem: string = '';

  constructor() {}

  ngOnInit(): void {}

  // Metodo per aggiungere un nuovo elemento
  addItem(): void {
    if (this.newItem.trim()) {
      this.items.push(this.newItem); // Aggiungi l'elemento alla lista
      this.newItem = ''; // Resetta il campo di input
    }
  }
}
