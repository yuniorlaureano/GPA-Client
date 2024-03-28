import { Routes } from '@angular/router';
import { UnitPageComponent } from '../pages/common/units/unit-page.component';

export const paths = {
  unit: 'common/unit',
};

export default [
  {
    path: paths.unit,
    component: UnitPageComponent,
  },
] as Routes;
