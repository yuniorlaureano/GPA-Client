import { Routes } from '@angular/router';
import inventoryRoutes from '../appRoutes/inventoryRoutes';
import invoicecRoutes from '../appRoutes/invoicecRoutes';
import commonRoutes from '../appRoutes/commonRoutes';
import securityRoutes from '../appRoutes/securityRoutes';
import { AdminComponent, PlainComponent } from '../layouts';

export const routes: Routes = [
  {
    path: 'security',
    component: PlainComponent,
    children: [...securityRoutes],
  },
  {
    path: '',
    component: AdminComponent,
    children: [...inventoryRoutes],
  },
  {
    path: '',
    component: AdminComponent,
    children: [...invoicecRoutes],
  },
  {
    path: '',
    component: AdminComponent,
    children: [...commonRoutes],
  },
];
