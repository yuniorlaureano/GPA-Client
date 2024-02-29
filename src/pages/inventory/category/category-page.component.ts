import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/inventory/category.service';

@Component({
  selector: 'app-categoryPage',
  standalone: true,
  imports: [],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css',
})
export class CategoryPageComponent implements OnInit {
  public categories = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().then(({ data }) => {
      console.log(data);
    });
  }
}
