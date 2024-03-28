import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/inventory/product.service';
import {
  productCreationDefaultValues,
  ProductCreationModel,
  toProductCreation,
} from '../../../../models/inventory/product.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '../../../../components/select/select.component';
import { SelectModel } from '../../../../models/common/select-model';
import { CategoryService } from '../../../../services/inventory/category.service';
import { SearchModel } from '../../../../models/common/search.model';
import { DEFAULT_SEARCH_PARAMS } from '../../../../services/common/util.service';
import { ProductLocationService } from '../../../../services/inventory/product-location.service';
import { UnitService } from '../../../../services/common/unit.service';
import { paths } from '../../../../appRoutes/inventoryRoutes';
import { ConfirmComponent } from '../../../../components/confirm/confirm.component';

declare var $: any;
@Component({
  selector: 'app-categoryPage',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
    SelectComponent,
    ConfirmComponent,
  ],
  templateUrl: './product-registration-page.component.html',
})
export class ProductRegistrationPageComponent implements OnInit {
  units: SelectModel[] = [];
  categories: SelectModel[] = [];
  selectedProduct: { code?: string; name?: string; id?: string | null } = {};
  locations: SelectModel[] = [];
  isConfirmDeleteOpen: boolean = false;
  isEdit: boolean = false;

  form = new FormGroup({
    id: new FormControl(),
    code: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    photo: new FormControl(),
    description: new FormControl(),
    barCode: new FormControl(),
    expirationDate: new FormControl(),
    unitId: new FormControl(),
    categoryId: new FormControl(),
    productLocationId: new FormControl(),
  });

  public search: SearchModel = { ...DEFAULT_SEARCH_PARAMS };

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private productLocationService: ProductLocationService,
    private unitService: UnitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  navigateToProductList = () => {
    this.router.navigate([paths.product]);
  };

  async loadOptions() {
    var categoriePromise = this.categoryService.getCategories(this.search);
    var locationPromise = this.productLocationService.getProductLocation(
      this.search
    );
    var unitPromise = this.unitService.getUnits(this.search);

    let [categories, locations, units] = await Promise.all([
      categoriePromise,
      locationPromise,
      unitPromise,
    ]);
    this.categories = categories.data.data.map((category) => ({
      value: category.id,
      text: category.name,
    })) as SelectModel[];

    this.locations = locations.data.data.map((location) => ({
      value: location.id,
      text: location.code + '-' + location.name,
    })) as SelectModel[];

    this.units = units.data.data.map((unit) => ({
      value: unit.id,
      text: unit.code + '-' + unit.name,
    })) as SelectModel[];
  }

  async getProduct(id: string): Promise<ProductCreationModel> {
    const product = await this.productService.getProduct(id);
    return toProductCreation(product.data);
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    try {
      if (id) {
        this.isEdit = true;
        const product = await this.getProduct(id);
        this.selectedProduct = {
          id: product.id,
          code: product.code,
          name: product.name,
        };
        this.form.setValue(product);
      }
      await this.loadOptions();
    } catch (error) {
      console.log(error);
    }
  }

  save = async () => {
    if (this.isEdit) {
      await this.productService.updateProduct(
        this.form.value as ProductCreationModel
      );
      this.form.setValue(productCreationDefaultValues);
    } else {
      await this.productService.addProduct(
        this.form.value as ProductCreationModel
      );
      this.form.setValue(productCreationDefaultValues);
    }
  };

  handleCancel = () => {
    this.form.setValue(productCreationDefaultValues);
    this.navigateToProductList();
  };

  deleteConfirm = () => {};

  handleDelete = () => {
    this.isConfirmDeleteOpen = true;
  };

  handleDeleteConfirmCancel = () => {
    this.isConfirmDeleteOpen = false;
  };

  handleDeleteConfirmed = async () => {
    if (this.selectedProduct?.id) {
      await this.productService.deleteProduct(this.selectedProduct?.id);
      this.isConfirmDeleteOpen = false;
      this.navigateToProductList();
    }
  };
}
