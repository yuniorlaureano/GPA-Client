import { EnvService } from '../common/env/env.service';
import { Injectable } from '@angular/core';
import axiosInstance from '../common/axios.service';
import { ResponseModel } from '../../models/common/response.model';
import { AxiosResponse } from 'axios';
import { SearchModel } from '../../models/common/search.model';
import { searchToQueryString } from '../common/util.service';
import { UnitModel } from '../../models/common/unit.model';
import commonEndpoints from '../../endpoints/commonEndpoints';
@Injectable({
  providedIn: 'root',
})
export class UnitService {
  constructor(private env: EnvService) {}

  getUnits(
    search: SearchModel
  ): Promise<AxiosResponse<ResponseModel<UnitModel>, any>> {
    return axiosInstance.get<ResponseModel<UnitModel>>(
      `${this.env.apiUrl}/${commonEndpoints.units}?${searchToQueryString(
        search
      )}`
    );
  }

  addUnit(model: UnitModel): Promise<AxiosResponse> {
    return axiosInstance.post(
      `${this.env.apiUrl}/${commonEndpoints.units}`,
      model
    );
  }

  updateUnit(model: UnitModel): Promise<AxiosResponse> {
    return axiosInstance.put(
      `${this.env.apiUrl}/${commonEndpoints.units}`,
      model
    );
  }

  deleteUnit(id: string): Promise<AxiosResponse> {
    return axiosInstance.delete(
      `${this.env.apiUrl}/${commonEndpoints.units}/${id}`
    );
  }
}
