import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Aggiungi questa riga

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { LoaderComponent } from './loader/loader.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    LoaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Aggiungi FormsModule qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
