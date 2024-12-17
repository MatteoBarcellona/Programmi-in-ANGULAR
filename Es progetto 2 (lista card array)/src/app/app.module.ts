import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import necessario per [(ngModel)]

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ListaComponent } from './lista/lista.component'; // Import del componente Card

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListaComponent // Aggiungi qui il componente Card
  ],
  imports: [
    BrowserModule,
    FormsModule // Se usi [(ngModel)] nel progetto
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
