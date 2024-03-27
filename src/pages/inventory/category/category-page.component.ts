import { Component } from '@angular/core';
import { CategoryTableComponent } from './categoryTable/category-table.component';
import { ModalComponent } from '../../../components/modal/modal.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import {
  CategoryModel,
  categoryModelDefaultValues,
} from '../../../models/inventory/category.model';
import { CategoryService } from '../../../services/inventory/category.service';
import { ConfirmComponent } from '../../../components/confirm/confirm.component';

@Component({
  selector: 'app-categoryPage',
  standalone: true,
  imports: [
    CategoryTableComponent,
    ModalComponent,
    CategoryFormComponent,
    ConfirmComponent,
  ],
  templateUrl: './category-page.component.html',
})
export class CategoryPageComponent {
  isModalOpen: boolean = false;
  isConfirmOpen: boolean = false;
  model: CategoryModel = categoryModelDefaultValues;
  public reloadTable: number = 1;
  constructor(private categoryService: CategoryService) {}

  handleReloadTable = () => (this.reloadTable = this.reloadTable * -1);

  openModal = () => {
    this.isModalOpen = true;
  };

  handleClose = () => {
    this.model = { ...categoryModelDefaultValues };
    this.isModalOpen = false;
  };

  handleSubmit = async (model: CategoryModel) => {
    if (model.id) {
      await this.categoryService.updateCategory(model);
      this.handleClose();
      this.handleReloadTable();
    } else {
      await this.categoryService.addCategory(model);
      this.handleClose();
      this.handleReloadTable();
    }
  };

  handleEdit = (model: CategoryModel) => {
    this.model = model;
    this.openModal();
  };

  handleDelete = (model: CategoryModel) => {
    this.model = model;
    this.isConfirmOpen = true;
  };

  handleCancel = () => {
    this.isConfirmOpen = false;
    this.model = { ...categoryModelDefaultValues };
  };

  handleAccept = async () => {
    if (this.model.id) {
      await this.categoryService.deleteCategory(this.model.id);
      this.handleReloadTable();
      this.isConfirmOpen = false;
    }
  };
}
