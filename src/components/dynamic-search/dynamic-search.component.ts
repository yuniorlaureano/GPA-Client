import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModel } from '../../models/common/select-model';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-dynamic-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-search.component.html',
  styleUrl: './dynamic-search.component.css',
})
export class DynamicSelectComponent {
  dynamiclistIdentifier = uuidv4();
  @Input() items: SelectModel<any>[] = [];
  @Input() onSelectedItem: (item: SelectModel<any>) => void = () => {};
  @Input() onSearch: (search: string) => void = () => {};
  @Input() onNext: (index: number) => void = () => {};
  @Input() onPrevious: (index: number) => void = () => {};
  @Input() options: { count: number; page: number; pageSize: number } = {
    count: 0,
    page: 1,
    pageSize: 10,
  };
  searching = false;

  constructor() {}

  showPreviousButton() {
    return this.options.page > 1;
  }

  showNextButton() {
    const totalPages = Math.ceil(this.options.count / this.options.pageSize);
    return this.options.page < totalPages;
  }

  handleListFocus() {
    var dynamicList = document.getElementById(this.dynamiclistIdentifier);
    if (dynamicList && !dynamicList.classList.contains('open-dynamic-list')) {
      dynamicList.classList.add('open-dynamic-list');
    }
  }

  handleSelectItem(model: SelectModel<any>) {
    this.handleCloseDynamiList();
    this.onSelectedItem(model);
  }

  handleCloseDynamiList() {
    var dynamicList = document.getElementById(this.dynamiclistIdentifier);
    if (dynamicList && dynamicList.classList.contains('open-dynamic-list')) {
      dynamicList.classList.remove('open-dynamic-list');
    }
  }

  handleSearch(event: any) {
    if (!this.searching) {
      this.searching = true;
      setTimeout(() => {
        this.searching = false;
        this.onSearch(event.target.value);
      }, 500);
    }
  }

  handlePrevious() {
    if (this.options.page > 1) {
      this.onPrevious(this.options.page - 1);
    }
  }

  handleNext() {
    const totalPages = Math.ceil(this.options.count / this.options.pageSize);
    if (this.options.page < totalPages) {
      this.onNext(this.options.page + 1);
    }
  }
}
