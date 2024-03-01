import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DataTableOptionModel } from '../../models/common/data-table-option.model';
import { DEFAULT_SEARCH_PARAMS } from '../../services/common/util.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'data-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent {
  @Input() options: DataTableOptionModel = {
    ...DEFAULT_SEARCH_PARAMS,
    filteredSize: 0,
    count: 0,
  };

  @Input() onForwardPage: () => void = () => {};
  @Input() onBackwardPage: () => void = () => {};
  @Input() onSetPageToShow: (pageCount: number) => void = () => {};

  handleForwardPage() {
    this.onForwardPage();
  }

  handleBackwardPage() {
    this.onBackwardPage();
  }

  handleSetPageToShow(value: any) {
    this.onSetPageToShow(Number(value.target.value));
  }
}
