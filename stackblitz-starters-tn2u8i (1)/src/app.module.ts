import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessaggioComponent } from './messaggio/messaggio.component';

@NgModule({
  declarations: [
    MessaggioComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [MessaggioComponent]
})
export class AppModule { }
