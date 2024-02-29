import { Routes } from '@angular/router';
import { CategoryPageComponent } from '../pages/inventory/category/category-page.component';
import { ProductPageComponent } from '../pages/inventory/product/product-page.component';

export const paths = {
  category: 'inventory/category',
  product: 'inventory/product',
};

export default [
  {
    path: paths.category,
    component: CategoryPageComponent,
  },
  {
    path: paths.product,
    component: ProductPageComponent,
  },
] as Routes;
