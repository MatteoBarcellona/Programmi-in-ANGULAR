import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  isOpen = true;
  formData: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<string>();

  onSubmit() {
    this.submit.emit(this.formData);
    this.isOpen = false;
    this.close.emit();
  }
}
