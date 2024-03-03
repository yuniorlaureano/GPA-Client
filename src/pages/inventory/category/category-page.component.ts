import { Component, Input } from '@angular/core';
import { CategoryTableComponent } from './categoryTable/category-table.component';
import { ModalComponent } from '../../../components/modal/modal.component';
import { CategoryFormComponent } from './categoryForm/category-form.component';
import {
  CategoryModel,
  categoryModelDefaultValues,
} from '../../../models/inventory/category.model';
import { CategoryService } from '../../../services/inventory/category.service';

@Component({
  selector: 'app-categoryPage',
  standalone: true,
  imports: [CategoryTableComponent, ModalComponent, CategoryFormComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css',
})
export class CategoryPageComponent {
  isModalOpenned: boolean = false;
  @Input() model: CategoryModel = categoryModelDefaultValues;
  constructor(private categoryService: CategoryService) {}

  openModal = () => {
    this.isModalOpenned = true;
  };

  handleClose = () => {
    this.model = { ...categoryModelDefaultValues };
    this.isModalOpenned = false;
  };

  handleSubmit = (model: CategoryModel) => {
    if (model.id) {
      this.categoryService.updateCategory(model);
      this.handleClose();
    } else {
      this.categoryService.addCategory(model);
      this.handleClose();
    }
  };

  handleDelete = (model: CategoryModel) => {
    this.model = model;
    console.log(this.model);
    this.isModalOpenned = true;
  };

  handleEdit = (model: CategoryModel) => {
    this.model = model;
    this.isModalOpenned = true;
  };
}
