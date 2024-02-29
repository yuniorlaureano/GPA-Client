import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpHeaderService {
  getDefautHeaders(options = {}) {
    return {
      'Content-Type': 'application/json',
      ...options,
    };
  }

  getJwtHeaders(token: string, options = {}) {
    return {
      Authorization: `Bearer ${token}`,
      ...options,
    };
  }
}
