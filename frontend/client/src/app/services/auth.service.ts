import { Injectable } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl =
    'http://localhost/weather-api/backend/routes';

  constructor(
    private http: HttpClient
  ) {}

  login(data: any) {

    return this.http.post(
      `${this.apiUrl}/login.php`,
      data
    );
  }

  register(data: any) {

    return this.http.post(
      `${this.apiUrl}/register.php`,
      data
    );
  }
}