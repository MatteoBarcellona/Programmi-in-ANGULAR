import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 style="text-align: center;">Ciao bertornato su {{ name }}!</h1>
    <p style="text-align: center;">Angular è un framework open-source per lo sviluppo di applicazioni web e mobile. Creato da Google, Angular offre un'architettura robusta basata su TypeScript, che consente agli sviluppatori di costruire applicazioni dinamiche e interattive. Con Angular, è possibile creare singole pagine web (SPA) e applicazioni web complesse. Il framework offre un sistema modulare che consente di organizzare il codice in moduli, componenti e servizi, facilitando così la manutenzione e il riutilizzo del codice.

    Angular sfrutta il concetto di two-way data binding, il che significa che i cambiamenti nell'interfaccia utente (ad esempio, modifica di un campo di input) vengono immediatamente riflessi nel modello sottostante e viceversa. Questo semplifica notevolmente la gestione dello stato dell'applicazione.
    
    Il framework fornisce anche una serie di strumenti per gestire il routing dell'applicazione, consentendo agli sviluppatori di creare applicazioni a pagine multiple con URL amichevoli per i motori di ricerca. Angular include anche funzionalità di testing automatico integrate, che facilitano la scrittura di test unitari e di integrazione per garantire la robustezza dell'applicazione.
    
    Una caratteristica chiave di Angular è la sua flessibilità nell'integrazione con altre librerie e framework. Gli sviluppatori possono utilizzare Angular insieme a librerie come RxJS per gestire la programmazione reattiva o Bootstrap per progettare interfacce utente attraenti.
    
    Infine, Angular è supportato da una vasta comunità di sviluppatori e dispone di una documentazione completa e di una serie di risorse online, rendendo più facile per gli sviluppatori apprendere e utilizzare il framework efficacemente per creare applicazioni web avanzate e intuitive.</p>

    <div style="background-color: red; width: 400px;height: 
    300px;"></div>
  `,


})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
