import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUri = 'https://expensable-api.herokuapp.com/';

  constructor() {}

  getAllCategories() {}
}
