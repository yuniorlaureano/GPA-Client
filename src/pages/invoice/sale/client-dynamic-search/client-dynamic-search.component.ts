import { Component, Input, OnInit } from '@angular/core';
import { SelectModel } from '../../../../models/common/select-model';
import { CommonModule } from '@angular/common';
import { DynamicSelectComponent } from '../../../../components/dynamic-search/dynamic-search.component';
import { ClientService } from '../../../../services/invoice/client.service';
import { ClientModel } from '../../../../models/invoice/client.model';

@Component({
  selector: 'app-client-dynamic-search',
  standalone: true,
  imports: [CommonModule, DynamicSelectComponent],
  templateUrl: './client-dynamic-search.component.html',
})
export class ClientDynamicSearchComponent implements OnInit {
  @Input() onSelectedItem: (model: ClientModel) => void = () => {};
  items: SelectModel<ClientModel>[] = [];
  search: string = '';
  options: { count: number; page: number; pageSize: number } = {
    count: 0,
    page: 1,
    pageSize: 10,
  };

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.getClients(this.options, this.search);
  }

  getClients(
    options: { count: number; page: number; pageSize: number },
    search: string
  ) {
    const serach = {
      page: options.page,
      pageSize: options.pageSize,
      search: search,
    };
    this.clientService.getClients(serach).then(({ data }) => {
      this.items = data.data.map((client) => {
        return {
          text: client.name + ' - ' + client.lastName,
          value: client,
        };
      });
      this.options = {
        ...options,
        count: data.count,
      };
    });
  }

  handleSelectedItem = (model: SelectModel<ClientModel>) => {
    this.onSelectedItem(model.value);
  };

  handleSearch = (search: string) => {
    this.search = search;
    this.getClients(this.options, search);
  };

  handleNext = (page: number) => {
    this.getClients(
      {
        ...this.options,
        page: page,
      },
      this.search
    );
  };

  handlePrevious = (page: number) => {
    this.getClients(
      {
        ...this.options,
        page: page,
      },
      this.search
    );
  };
}
