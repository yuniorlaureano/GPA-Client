import { Routes } from '@angular/router';
import { CategoryPageComponent } from '../pages/inventory/category/category-page.component';
import { ProductPageComponent } from '../pages/inventory/product/product-page.component';

export default [
  {
    path: 'inventory/category',
    component: CategoryPageComponent,
  },
  {
    path: 'inventory/product',
    component: ProductPageComponent,
  },
] as Routes;
