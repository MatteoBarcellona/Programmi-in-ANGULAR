import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Cambia da .css a .scss
})
export class AppComponent {
  isModalVisible = true;
  isLoaderVisible = false;
  cards: string[] = [];

  onModalClose() {
    this.isModalVisible = false;
  }

  onModalSubmit(formData: string) {
    this.isModalVisible = false;
    this.isLoaderVisible = true;
    setTimeout(() => {
      this.cards.push(formData);
      this.isLoaderVisible = false;
    }, 3000);
  }
}
