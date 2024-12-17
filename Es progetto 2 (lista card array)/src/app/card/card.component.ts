import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // Definisci l'oggetto in input
  @Input() cardData!: { titolo: string; descrizione: string; codiceColore: string };
}
