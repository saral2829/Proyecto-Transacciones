import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  private apiUri = 'https://expensable-api.herokuapp.com/';

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post(`${this.apiUri}/login`, credentials);
  }
}
