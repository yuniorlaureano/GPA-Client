import { EnvService } from '../common/env/env.service';
import invoiceEndpoints from '../../endpoints/invoiceEndpoints';
import { Injectable } from '@angular/core';
import axiosInstance from '../common/axios.service';
import { ResponseModel } from '../../models/common/response.model';
import { AxiosResponse } from 'axios';
import { SearchModel } from '../../models/common/search.model';
import { searchToQueryString } from '../common/util.service';
import { ClientModel } from '../../models/invoice/client.model';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private env: EnvService) {}

  getClients(
    search: SearchModel
  ): Promise<AxiosResponse<ResponseModel<ClientModel>, any>> {
    return axiosInstance.get<ResponseModel<ClientModel>>(
      `${this.env.apiUrl}/${invoiceEndpoints.clients}?${searchToQueryString(
        search
      )}`
    );
  }

  addClient(model: ClientModel): Promise<AxiosResponse> {
    return axiosInstance.post(
      `${this.env.apiUrl}/${invoiceEndpoints.clients}`,
      model
    );
  }

  updateClient(model: ClientModel): Promise<AxiosResponse> {
    return axiosInstance.put(
      `${this.env.apiUrl}/${invoiceEndpoints.clients}`,
      model
    );
  }

  deleteClient(id: string): Promise<AxiosResponse> {
    return axiosInstance.delete(
      `${this.env.apiUrl}/${invoiceEndpoints.clients}/${id}`
    );
  }
}
