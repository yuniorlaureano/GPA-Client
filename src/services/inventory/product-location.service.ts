import { EnvService } from '../common/env/env.service';
import inventoryEndpoints from '../../endpoints/inventoryEndpoints';
import { Injectable } from '@angular/core';
import axiosInstance from '../common/axios.service';
import { ResponseModel } from '../../models/common/response.model';
import { AxiosResponse } from 'axios';
import { SearchModel } from '../../models/common/search.model';
import { searchToQueryString } from '../common/util.service';
import { ProductLocationModel } from '../../models/inventory/product-location.model';
@Injectable({
  providedIn: 'root',
})
export class ProductLocationService {
  constructor(private env: EnvService) {}

  getProductLocation(
    search: SearchModel
  ): Promise<AxiosResponse<ResponseModel<ProductLocationModel>, any>> {
    return axiosInstance.get<ResponseModel<ProductLocationModel>>(
      `${this.env.apiUrl}/${
        inventoryEndpoints.productLocations
      }?${searchToQueryString(search)}`
    );
  }

  addProductLocation(model: ProductLocationModel): Promise<AxiosResponse> {
    return axiosInstance.post(
      `${this.env.apiUrl}/${inventoryEndpoints.productLocations}`,
      model
    );
  }

  updateProductLocation(model: ProductLocationModel): Promise<AxiosResponse> {
    return axiosInstance.put(
      `${this.env.apiUrl}/${inventoryEndpoints.productLocations}`,
      model
    );
  }

  deleteProductLocation(id: string): Promise<AxiosResponse> {
    return axiosInstance.delete(
      `${this.env.apiUrl}/${inventoryEndpoints.productLocations}/${id}`
    );
  }
}
