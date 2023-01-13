import { Component, OnInit } from "@angular/core";

import { Category } from "../../models/category.model";

@Component({
   selector: "app-category",
   templateUrl: "./category.component.html",
   styleUrls: ["./category.component.css"],
})
export class CategoryComponent {
   visibleNewCategoryPopup: boolean = false;

   categories: Array<Category> = [
      {
         id: 1,
         name: "Rent",
         icon: "rent",
         type: "expense",
         color: "red",
         total: "500",
      },
      // {
      //   id: 2,
      //   name: 'Groceries',
      //   icon: 'groceries',
      //   type: 'expense',
      //   color: 'dark-orange',
      //   total: '100',
      // },
      // {
      //   id: 3,
      //   name: 'Transport',
      //   icon: 'transport',
      //   type: 'expense',
      //   color: 'orange',
      //   total: '150',
      // },
      // {
      //   id: 4,
      //   name: 'Health',
      //   icon: 'health',
      //   type: 'income',
      //   color: 'dark-green',
      //   total: '200',
      // },
      // {
      //   id: 5,
      //   name: 'Gifts',
      //   icon: 'gifts',
      //   type: 'income',
      //   color: 'green',
      //   total: '50',
      // },
      // {
      //   id: 6,
      //   name: 'Education',
      //   icon: 'education',
      //   type: 'expense',
      //   color: 'sky-blue',
      //   total: '250',
      // },
   ];

   addCategory(): void {
      this.visibleNewCategoryPopup = true;
   }

   closePopup(): void {
      this.visibleNewCategoryPopup = false;
   }

   createCategory(categorie: Category): void {
      this.categories.push(categorie);
   }
}
