import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DataTableComponent } from '../../../../components/datatable/data-table.component';
import { UnitModel } from '../../../../models/common/unit.model';
import { CommonModule } from '@angular/common';
import { DataTableDataModel } from '../../../../models/common/data-table-data.model';
import { DEFAULT_SEARCH_PARAMS } from '../../../../services/common/util.service';
import { UnitService } from '../../../../services/common/unit.service';
import { SearchModel } from '../../../../models/common/search.model';

@Component({
  selector: 'unit-table',
  standalone: true,
  imports: [DataTableComponent, CommonModule],
  templateUrl: './unit-table.component.html',
})
export class UnitTableComponent implements OnInit, OnChanges {
  @Input() onDelete: (model: UnitModel) => void = () => {};
  @Input() onEdit: (model: UnitModel) => void = () => {};
  @Input() reloadTable: number = 1;

  public data: DataTableDataModel<UnitModel> = {
    data: [],
    options: {
      ...DEFAULT_SEARCH_PARAMS,
      filteredSize: 0,
      count: 0,
    },
  };

  public search: SearchModel = { ...DEFAULT_SEARCH_PARAMS };

  constructor(private unitService: UnitService) {}

  getUnits(search: SearchModel) {
    this.unitService.getUnits(search).then(({ data }) => {
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
    this.getUnits({ ...this.search });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reloadTable'] && !changes['reloadTable'].firstChange) {
      this.getUnits({ ...this.search });
    }
  }

  handleSetPageToShow = (value: number) => {
    this.getUnits({ ...this.search, pageSize: value });
  };

  handleForwardPage = (page: number): void => {
    this.getUnits({ ...this.search, page: page });
  };

  handleBackwardPage = (page: number): void => {
    this.getUnits({ ...this.search, page: page });
  };
}
