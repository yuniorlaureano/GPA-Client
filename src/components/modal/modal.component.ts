import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'gpa-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnChanges {
  @Input() isOpen: boolean = false;

  @Input() onClose: () => void = () => {};
  @Input() onSave: () => void = () => {};

  ngOnChanges(changes: SimpleChanges): void {
    if ('isOpen' in changes) {
      if (changes['isOpen']) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    }
  }

  handleClose = () => {
    this.isOpen = false;
    this.onClose();
  };

  handleSave() {
    this.onSave();
  }
}
