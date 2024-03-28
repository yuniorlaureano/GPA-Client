import { Routes } from '@angular/router';
import { CategoryPageComponent } from '../pages/inventory/category/category-page.component';
import { ProductPageComponent } from '../pages/inventory/product/product-page.component';
import { ProductRegistrationPageComponent } from '../pages/inventory/product/product-registration-page/product-registration-page.component';

export const paths = {
  category: 'inventory/category',
  product: 'inventory/product',
  productRegistration: 'inventory/product/form',
  productRegistrationEdit: 'inventory/product/form/:id',
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
  {
    path: paths.productRegistration,
    component: ProductRegistrationPageComponent,
  },
  {
    path: paths.productRegistrationEdit,
    component: ProductRegistrationPageComponent,
  },
] as Routes;
