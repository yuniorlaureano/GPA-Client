import { Component } from '@angular/core';
import { CategoryTableComponent } from './categoryTable/category-table.component';

@Component({
  selector: 'app-categoryPage',
  standalone: true,
  imports: [CategoryTableComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css',
})
export class CategoryPageComponent {}
