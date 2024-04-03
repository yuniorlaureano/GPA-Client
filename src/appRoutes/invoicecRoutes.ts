import { Routes } from '@angular/router';
import { SalePageComponent } from '../pages/invoice/sale/sale-page.component';

export const paths = {
  sale: 'invoice/sale',
};

export default [
  {
    path: paths.sale,
    component: SalePageComponent,
  },
] as Routes;
