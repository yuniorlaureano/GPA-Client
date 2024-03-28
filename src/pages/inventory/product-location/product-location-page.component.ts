import { Component } from '@angular/core';
import { ModalComponent } from '../../../components/modal/modal.component';
import { ConfirmComponent } from '../../../components/confirm/confirm.component';
import { ProductLocationTableComponent } from './product-location-table/product-location-table.component';
import { ProductLocationFormComponent } from './product-location-form/product-location-form.component';
import {
  productLocationDefaultValues,
  ProductLocationModel,
} from '../../../models/inventory/product-location.model';
import { ProductLocationService } from '../../../services/inventory/product-location.service';

@Component({
  selector: 'app-product-location-page',
  standalone: true,
  imports: [
    ProductLocationTableComponent,
    ModalComponent,
    ProductLocationFormComponent,
    ConfirmComponent,
  ],
  templateUrl: './product-location-page.component.html',
})
export class ProductLocationPageComponent {
  isModalOpen: boolean = false;
  isConfirmOpen: boolean = false;
  model: ProductLocationModel = productLocationDefaultValues;
  public reloadTable: number = 1;
  constructor(private productLocationService: ProductLocationService) {}

  handleReloadTable = () => (this.reloadTable = this.reloadTable * -1);

  openModal = () => {
    this.isModalOpen = true;
  };

  handleClose = () => {
    this.model = { ...productLocationDefaultValues };
    this.isModalOpen = false;
  };

  handleSubmit = async (model: ProductLocationModel) => {
    if (model.id) {
      await this.productLocationService.updateProductLocation(model);
      this.handleClose();
      this.handleReloadTable();
    } else {
      await this.productLocationService.addProductLocation(model);
      this.handleClose();
      this.handleReloadTable();
    }
  };

  handleEdit = (model: ProductLocationModel) => {
    this.model = model;
    this.openModal();
  };

  handleDelete = (model: ProductLocationModel) => {
    this.model = model;
    this.isConfirmOpen = true;
  };

  handleCancel = () => {
    this.isConfirmOpen = false;
    this.model = { ...productLocationDefaultValues };
  };

  handleAccept = async () => {
    if (this.model.id) {
      await this.productLocationService.deleteProductLocation(this.model.id);
      this.handleReloadTable();
      this.isConfirmOpen = false;
    }
  };
}
