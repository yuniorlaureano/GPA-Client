import { EnvService } from '../common/env/env.service';
import inventoryEndpoints from '../../endpoints/inventoryEndpoints';
import { Injectable } from '@angular/core';
import axiosInstance from '../common/axios.service';
import { ResponseModel } from '../../models/common/response.model';
import { CategoryModel } from '../../models/inventory/category.model';
import { AxiosResponse } from 'axios';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private env: EnvService) {}

  getCategories(): Promise<AxiosResponse<ResponseModel<CategoryModel>, any>> {
    return axiosInstance.get<ResponseModel<CategoryModel>>(
      `${this.env.apiUrl}/${inventoryEndpoints.categories}`
    );
  }
}
