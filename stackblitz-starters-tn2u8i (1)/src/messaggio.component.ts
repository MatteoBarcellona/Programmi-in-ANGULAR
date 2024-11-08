// In messaggio.component.ts
export class MessaggioComponent {
  nome: string = '';
  messaggio: string = '';

  inviaMessaggio() {
    this.messaggio = `Ciao, ${this.nome}!`;
  }
}
