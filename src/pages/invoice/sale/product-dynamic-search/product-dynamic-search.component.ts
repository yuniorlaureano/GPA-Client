import { Component, OnInit } from '@angular/core';
import { SelectModel } from '../../../../models/common/select-model';
import { CommonModule } from '@angular/common';
import { DynamicSelectComponent } from '../../../../components/dynamic-search/dynamic-search.component';
import { ProductService } from '../../../../services/inventory/product.service';
import { ProductModel } from '../../../../models/inventory/product.model';

@Component({
  selector: 'app-product-dynaic-search',
  standalone: true,
  imports: [CommonModule, DynamicSelectComponent],
  templateUrl: './product-dynamic-search.component.html',
  styleUrl: './product-dynamic-search.component.css',
})
export class ProductDynamicSearchComponent implements OnInit {
  selectedItems: { [id: string]: ProductModel } = {};
  items: SelectModel<ProductModel>[] = [];
  search: string = '';
  options: { count: number; page: number; pageSize: number } = {
    count: 0,
    page: 1,
    pageSize: 10,
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts(this.options, this.search);
  }

  getProducts(
    options: { count: number; page: number; pageSize: number },
    search: string
  ) {
    const serach = {
      page: options.page,
      pageSize: options.pageSize,
      search: search,
    };
    this.productService.getProducts(serach).then(({ data }) => {
      this.items = data.data.map((product) => {
        return {
          text: product.code + ' - ' + product.name,
          value: product,
        };
      });
      this.options = {
        ...options,
        count: data.count,
      };
    });
  }

  getSelectedProductsKeys() {
    return Object.keys(this.selectedItems);
  }

  handleSelectedItem = (model: SelectModel<ProductModel>) => {
    if (!this.selectedItems.hasOwnProperty(model.value.id)) {
      this.selectedItems[model.value.id] = model.value;
    }
  };

  handleSearch = (search: string) => {
    this.search = search;
    this.getProducts(this.options, search);
  };

  handleNext = (page: number) => {
    this.getProducts(
      {
        ...this.options,
        page: page,
      },
      this.search
    );
  };

  handlePrevious = (page: number) => {
    this.getProducts(
      {
        ...this.options,
        page: page,
      },
      this.search
    );
  };
}
