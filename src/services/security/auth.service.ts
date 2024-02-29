import { Injectable } from '@angular/core';
import { EnvService } from '../common/env/env.service';
import { AuthModel } from '../../models/security/auth.model';
import securityEndpoints from '../../endpoints/securityEndpoints';
import axiosInstance from '../common/axios.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private env: EnvService) {}

  login(model: AuthModel) {
    return axiosInstance.post(
      `${this.env.apiUrl}/${securityEndpoints.login}`,
      model
    );
  }

  logout() {
    //servie that clear the token from loccalstorage
  }
}
