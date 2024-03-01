import { Component, OnInit } from '@angular/core';
import { DataTableComponent } from '../../../../components/datatable/data-table.component';
import { CategoryModel } from '../../../../models/inventory/category.model';
import { CommonModule } from '@angular/common';
import { DataTableDataModel } from '../../../../models/common/data-table-data.model';
import { DEFAULT_SEARCH_PARAMS } from '../../../../services/common/util.service';
import { CategoryService } from '../../../../services/inventory/category.service';
import { SearchModel } from '../../../../models/common/search.model';

@Component({
  selector: 'category-table',
  standalone: true,
  imports: [DataTableComponent, CommonModule],
  templateUrl: './category-table.component.html',
})
export class CategoryTableComponent implements OnInit {
  public data: DataTableDataModel<CategoryModel> = {
    data: [],
    options: {
      ...DEFAULT_SEARCH_PARAMS,
      filteredSize: 0,
      count: 0,
    },
  };

  public search: SearchModel = { ...DEFAULT_SEARCH_PARAMS, pageSize: 1 };

  constructor(private categoryService: CategoryService) {}

  getCategories(search: SearchModel) {
    this.categoryService.getCategories(search).then(({ data }) => {
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
    this.getCategories({ ...this.search });
  }

  handleSetPageToShow = (value: number) => {
    this.getCategories({ ...this.search, pageSize: value });
  };

  handleForwardPage = (page: number): void => {
    this.getCategories({ ...this.search, page: page });
  };

  handleBackwardPage = (page: number): void => {
    this.getCategories({ ...this.search, page: page });
  };
}
