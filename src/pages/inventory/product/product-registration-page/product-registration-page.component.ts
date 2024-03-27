import { Component } from '@angular/core';
import { ProductService } from '../../../../services/inventory/product.service';
import { ProductModel } from '../../../../models/inventory/product.model';

@Component({
  selector: 'app-categoryPage',
  standalone: true,
  imports: [],
  templateUrl: './product-registration-page.component.html',
})
export class ProductRegistrationPageComponent {
  isModalOpen: boolean = false;
  isConfirmOpen: boolean = false;
  public reloadTable: number = 1;
  constructor(private productService: ProductService) {}

  handleReloadTable = () => (this.reloadTable = this.reloadTable * -1);

  handleEdit = (model: ProductModel) => {};

  handleDelete = (model: ProductModel) => {};

  handleCancel = () => {};

  handleAccept = async () => {
    //   if (this.model.id) {
    //     await this.categoryService.deleteCategory(this.model.id);
    //     this.handleReloadTable();
    //     this.isConfirmOpen = false;
    //   }
  };
}
