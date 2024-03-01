import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CategoryTableComponent } from './categoryTable/category-table.component';
import { ModalComponent } from '../../../components/modal/modal.component';

@Component({
  selector: 'app-categoryPage',
  standalone: true,
  imports: [CategoryTableComponent, ModalComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css',
})
export class CategoryPageComponent {
  isModalOpenned: boolean = false;

  openModal = () => {
    this.isModalOpenned = true;
  };

  handleClose = () => {
    this.isModalOpenned = false;
  };

  handleSave = () => {
    this.isModalOpenned = false;
  };
}
