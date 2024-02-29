import { Injectable } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  saveToken(token: string): void {
    localStorage.setItem('gpa-jwt-token', token);
  }

  getToken(): string {
    return localStorage.getItem('gpa-jwt-token') || '';
  }

  getDecodedToken(token: string): JwtPayload {
    var token = this.getToken();
    var decodedToken = jwtDecode(token);
    return decodedToken;
  }
}
