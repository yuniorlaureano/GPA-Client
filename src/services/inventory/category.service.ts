import { EnvService } from '../common/env/env.service';
import inventoryEndpoints from '../../endpoints/inventoryEndpoints';
import { Injectable } from '@angular/core';
import axiosInstance from '../common/axios.service';
import { ResponseModel } from '../../models/common/response.model';
import { CategoryModel } from '../../models/inventory/category.model';
import { AxiosResponse } from 'axios';
import { SearchModel } from '../../models/common/search.model';
import { searchToQueryString } from '../common/util.service';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private env: EnvService) {}

  getCategories(
    search: SearchModel
  ): Promise<AxiosResponse<ResponseModel<CategoryModel>, any>> {
    return axiosInstance.get<ResponseModel<CategoryModel>>(
      `${this.env.apiUrl}/${
        inventoryEndpoints.categories
      }?${searchToQueryString(search)}`
    );
  }

  addCategory(model: CategoryModel): Promise<AxiosResponse> {
    return axiosInstance.post(
      `${this.env.apiUrl}/${inventoryEndpoints.categories}`,
      model
    );
  }

  updateCategory(model: CategoryModel): Promise<AxiosResponse> {
    return axiosInstance.put(
      `${this.env.apiUrl}/${inventoryEndpoints.categories}`,
      model
    );
  }
}
