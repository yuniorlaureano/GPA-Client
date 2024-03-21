import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'gpa-confirm',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confirm.component.html',
})
export class ConfirmComponent implements OnChanges {
  @Input() isOpen: boolean = false;

  @Input() onClose: () => void = () => {};
  @Input() onAccept: () => void = () => {};

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

  handleAccept() {
    this.onAccept();
  }
}
