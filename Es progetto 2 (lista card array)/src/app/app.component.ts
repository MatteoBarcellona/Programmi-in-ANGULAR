import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Oggetto con i dati per la card
  card = {
    titolo: 'Benvenuto in Angular',
    descrizione: 'Questa è una semplice card dinamica.',
    codiceColore: '#007BFF' // Colore blu
  };
}
