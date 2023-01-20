import { Injectable, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Transaction } from "../models/transaction.model";
import { Category } from "../models/category.model";

@Injectable({
   providedIn: "root",
})
export class CategoryService {
   data: any[] = [];
   categories: any = [];
   transactions: Array<Transaction> = [];

   private apiUri = "https://expensable-api.herokuapp.com/";

   constructor(private http: HttpClient) {}

   getData() {
      this.http.get(`${this.apiUri}categories`).subscribe((data: any) => {
         this.data = data;
         this.transactions = this.getTransactions();
         this.categories = this.getCategories();
         console.log(this.transactions);
         console.log(this.categories);
      });
   }

   getCategories() {
      return this.data.map((category) => {
         return {
            id: category.id,
            name: category.name,
            icon: category.icon,
            type: category.transaction_type,
            color: category.color,
         };
      });
   }

   getTransactions() {
      return this.data
         .map((category) => {
            return category.transactions.map((transaction: Transaction) => {
               return {
                  id: transaction.id,
                  amount: transaction.amount,
                  date: transaction.date,
                  category_id: category.id,
               };
            });
         })
         .flat();
   }
}
