import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DataTableComponent } from '../../../../components/datatable/data-table.component';
import { ProductModel } from '../../../../models/inventory/product.model';
import { CommonModule } from '@angular/common';
import { DataTableDataModel } from '../../../../models/common/data-table-data.model';
import { DEFAULT_SEARCH_PARAMS } from '../../../../services/common/util.service';
import { ProductService } from '../../../../services/inventory/product.service';
import { SearchModel } from '../../../../models/common/search.model';

@Component({
  selector: 'product-table',
  standalone: true,
  imports: [DataTableComponent, CommonModule],
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent implements OnInit, OnChanges {
  @Input() onDelete: (model: ProductModel) => void = () => {};
  @Input() onEdit: (model: ProductModel) => void = () => {};
  @Input() reloadTable: number = 1;

  public data: DataTableDataModel<ProductModel> = {
    data: [],
    options: {
      ...DEFAULT_SEARCH_PARAMS,
      filteredSize: 0,
      count: 0,
    },
  };

  public search: SearchModel = { ...DEFAULT_SEARCH_PARAMS };

  constructor(private productService: ProductService) {}

  getProducts(search: SearchModel) {
    this.productService.getProducts(search).then(({ data }) => {
      this.data = {
        data: data.data,
        options: {
          ...search,
          count: data.count,
          filteredSize: data.data.length,
        },
      };
    });
  }

  ngOnInit(): void {
    this.getProducts({ ...this.search });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reloadTable'] && !changes['reloadTable'].firstChange) {
      this.getProducts({ ...this.search });
    }
  }

  handleSetPageToShow = (value: number) => {
    this.getProducts({ ...this.search, pageSize: value });
  };

  handleForwardPage = (page: number): void => {
    this.getProducts({ ...this.search, page: page });
  };

  handleBackwardPage = (page: number): void => {
    this.getProducts({ ...this.search, page: page });
  };
}
