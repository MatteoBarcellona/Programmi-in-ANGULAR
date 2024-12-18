import { Component, OnInit } from '@angular/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentLanguage = 'it'; // Lingua di default
  translations: any = {}; // Oggetto per memorizzare le traduzioni

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    // Carica le traduzioni all'avvio
    this.translationService.getTranslations().subscribe((translations) => {
      this.translations = translations;
    });
  }

  changeLanguage(event: Event): void {
    // Cast dell'evento per ottenere il valore selezionato
    const selectElement = event.target as HTMLSelectElement;
    const language = selectElement.value;  // Ottieni la lingua selezionata

    // Cambia la lingua nel servizio e aggiorna la lingua corrente
    this.translationService.changeLanguage(language);
    this.currentLanguage = language;
  }
}
