import { EnvService } from '../common/env/env.service';
import inventoryEndpoints from '../../endpoints/inventoryEndpoints';
import { Injectable } from '@angular/core';
import axiosInstance from '../common/axios.service';
import { ResponseModel } from '../../models/common/response.model';
import { AxiosResponse } from 'axios';
import { SearchModel } from '../../models/common/search.model';
import { searchToQueryString } from '../common/util.service';
import { ProductModel } from '../../models/inventory/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private env: EnvService) {}

  getProducts(
    search: SearchModel
  ): Promise<AxiosResponse<ResponseModel<ProductModel>, any>> {
    return axiosInstance.get<ResponseModel<ProductModel>>(
      `${this.env.apiUrl}/${inventoryEndpoints.products}?${searchToQueryString(
        search
      )}`
    );
  }

  addProduct(model: ProductModel): Promise<AxiosResponse> {
    return axiosInstance.post(
      `${this.env.apiUrl}/${inventoryEndpoints.products}`,
      model
    );
  }

  updateProduct(model: ProductModel): Promise<AxiosResponse> {
    return axiosInstance.put(
      `${this.env.apiUrl}/${inventoryEndpoints.products}`,
      model
    );
  }

  deleteProduct(id: string): Promise<AxiosResponse> {
    return axiosInstance.delete(
      `${this.env.apiUrl}/${inventoryEndpoints.products}/${id}`
    );
  }
}
