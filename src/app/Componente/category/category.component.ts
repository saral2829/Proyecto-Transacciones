import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { NewCategory } from 'src/app/models/new-category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  visibleNewCategoryPopup: boolean = false;

  categories: Array<Category> = [
    {
      id: 1,
      name: 'Rent',
      icon: 'rent',
      type: 'expense',
      color: 'gray',
      total: '500',
    },
    {
      id: 2,
      name: 'Groceries',
      icon: 'groceries',
      type: 'expense',
      color: 'dark-sky-blue',
      total: '100',
    },
    {
      id: 3,
      name: 'Transport',
      icon: 'transport',
      type: 'expense',
      color: 'dark-orange',
      total: '150',
    },
    {
      id: 4,
      name: 'Health',
      icon: 'health',
      type: 'income',
      color: 'red',
      total: '200',
    },
    {
      id: 5,
      name: 'Gifts',
      icon: 'gifts',
      type: 'income',
      color: 'purple',
      total: '50',
    },
    {
      id: 6,
      name: 'Education',
      icon: 'education',
      type: 'expense',
      color: 'blue',
      total: '250',
    },
  ];

  addCategory(): void {
    this.visibleNewCategoryPopup = true;
  }

  closePopup(): void {
    this.visibleNewCategoryPopup = false;
  }

  createCategory(categorie: NewCategory): void {
    this.categories.push({ ...categorie, id: this.categories.length + 1 });
  }
}
