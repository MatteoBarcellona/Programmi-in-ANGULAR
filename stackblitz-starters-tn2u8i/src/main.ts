import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: '<p>Benvenuto nell\'applicazione Angular!</p>',
})

export class App {
  name = 'Angular';
}

bootstrapApplication(App);
