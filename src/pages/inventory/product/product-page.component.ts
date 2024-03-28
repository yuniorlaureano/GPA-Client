import { Component } from '@angular/core';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductService } from '../../../services/inventory/product.service';
import { ProductModel } from '../../../models/inventory/product.model';
import { RouterLink, Router } from '@angular/router';
import { paths } from '../../../appRoutes/inventoryRoutes';
import { ConfirmComponent } from '../../../components/confirm/confirm.component';

@Component({
  selector: 'app-categoryPage',
  standalone: true,
  imports: [ProductTableComponent, RouterLink, ConfirmComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  isModalOpen: boolean = false;
  isConfirmDeleteOpen: boolean = false;
  selectedProduct: { code?: string; name?: string; id?: string | null } = {};
  public reloadTable: number = 1;
  constructor(private productService: ProductService, private router: Router) {}

  handleReloadTable = () => (this.reloadTable = this.reloadTable * -1);

  handleEdit = (model: ProductModel) => {
    this.router.navigate([
      paths.productRegistrationEdit.replace(':id', model.id),
    ]);
  };

  handleDelete = (model: ProductModel) => {
    this.selectedProduct = {
      id: model.id,
      code: model.code,
      name: model.name,
    };
    this.isConfirmDeleteOpen = true;
  };

  handleDeleteConfirmCancel = () => {
    this.isConfirmDeleteOpen = false;
  };

  handleDeleteConfirmed = async () => {
    if (this.selectedProduct?.id) {
      await this.productService.deleteProduct(this.selectedProduct?.id);
      this.isConfirmDeleteOpen = false;
      this.handleReloadTable();
    }
  };
}
