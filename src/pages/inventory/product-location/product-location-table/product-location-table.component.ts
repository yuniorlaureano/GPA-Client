import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DataTableComponent } from '../../../../components/datatable/data-table.component';
import { ProductLocationModel } from '../../../../models/inventory/product-location.model';
import { CommonModule } from '@angular/common';
import { DataTableDataModel } from '../../../../models/common/data-table-data.model';
import { DEFAULT_SEARCH_PARAMS } from '../../../../services/common/util.service';
import { ProductLocationService } from '../../../../services/inventory/product-location.service';
import { SearchModel } from '../../../../models/common/search.model';

@Component({
  selector: 'product-location-table',
  standalone: true,
  imports: [DataTableComponent, CommonModule],
  templateUrl: './product-location-table.component.html',
})
export class ProductLocationTableComponent implements OnInit, OnChanges {
  @Input() onDelete: (model: ProductLocationModel) => void = () => {};
  @Input() onEdit: (model: ProductLocationModel) => void = () => {};
  @Input() reloadTable: number = 1;

  public data: DataTableDataModel<ProductLocationModel> = {
    data: [],
    options: {
      ...DEFAULT_SEARCH_PARAMS,
      filteredSize: 0,
      count: 0,
    },
  };

  public search: SearchModel = { ...DEFAULT_SEARCH_PARAMS };

  constructor(private productLocationService: ProductLocationService) {}

  getProductLocations(search: SearchModel) {
    this.productLocationService.getProductLocation(search).then(({ data }) => {
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
    this.getProductLocations({ ...this.search });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reloadTable'] && !changes['reloadTable'].firstChange) {
      this.getProductLocations({ ...this.search });
    }
  }

  handleSetPageToShow = (value: number) => {
    this.getProductLocations({ ...this.search, pageSize: value });
  };

  handleForwardPage = (page: number): void => {
    this.getProductLocations({ ...this.search, page: page });
  };

  handleBackwardPage = (page: number): void => {
    this.getProductLocations({ ...this.search, page: page });
  };
}
