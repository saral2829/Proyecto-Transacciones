import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUri = 'https://expensable-api.herokuapp.com';

  constructor(private http: HttpClient) {}

  getAllCategories() {
    this.http.get(`${this.apiUri}/categories`).subscribe((data: any) => {
      console.log(data);
    });
  }
}
