import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../../../components/select/select.component';
import { CommonModule } from '@angular/common';
import { ProductDynamicSearchComponent } from './product-dynamic-search/product-dynamic-search.component';
import { ClientDynamicSearchComponent } from './client-dynamic-search/client-dynamic-search.component';
import { ClientModel } from '../../../models/invoice/client.model';

@Component({
  selector: 'app-sale-page',
  standalone: true,
  imports: [
    SelectComponent,
    CommonModule,
    ProductDynamicSearchComponent,
    ClientDynamicSearchComponent,
  ],
  templateUrl: './sale-page.component.html',
})
export class SalePageComponent implements OnInit {
  client: ClientModel | null = null;
  constructor() {}

  ngOnInit(): void {}

  handleSelectedClient = (model: ClientModel) => {
    this.client = { ...model };
  };
}
