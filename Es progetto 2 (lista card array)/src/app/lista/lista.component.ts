import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  cards = [
    { titolo: 'Card 1', descrizione: 'Descrizione della Card 1', codiceColore: '#FF5733' },
    { titolo: 'Card 2', descrizione: 'Descrizione della Card 2', codiceColore: '#33FF57' },
    { titolo: 'Card 3', descrizione: 'Descrizione della Card 3', codiceColore: '#3357FF' },
    { titolo: 'Card 4', descrizione: 'Descrizione della Card 4', codiceColore: '#FF33A1' },
    { titolo: 'Card 5', descrizione: 'Descrizione della Card 5', codiceColore: '#FFC733' },
    { titolo: 'Card 6', descrizione: 'Descrizione della Card 6', codiceColore: '#8A33FF' }
  ];

  newCardDescription: string = '';
  newCardColor: string = '';
  isModalOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // Metodo per rimuovere una card
  removeCard(index: number): void {
    this.cards.splice(index, 1);
  }

  // Metodo per aprire il modal
  openModal(): void {
    this.isModalOpen = true;
  }

  // Metodo per chiudere il modal
  closeModal(): void {
    this.isModalOpen = false;
    this.newCardDescription = '';
    this.newCardColor = '';
  }

  // Metodo per aggiungere una nuova card
  addCard(): void {
    const newCard = {
      titolo: `Card ${this.cards.length + 1}`,
      descrizione: this.newCardDescription,
      codiceColore: this.newCardColor
    };
    this.cards.push(newCard);

    // Resetta i valori e chiude il modal
    this.closeModal();
  }
}
