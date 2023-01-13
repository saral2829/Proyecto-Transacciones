import { Component, Output, EventEmitter } from "@angular/core";
import {
   Transaction,
   FilterParams,
   CategoryFilter,
} from "../../models/transaction.model";
import { FormGroup } from "@angular/forms";
import data_json from "../../transactions.json";
import categories_json from "../../categories.json";

@Component({
   selector: "app-filter",
   templateUrl: "./filter.component.html",
   styleUrls: ["./filter.component.css"],
})
export class FilterComponent {
   @Output() filtered = new EventEmitter<Array<Transaction>>();

   filterForm: FormGroup | any;

   transactions: Array<Transaction> = data_json.transactions;
   filtered_transactions: Array<Transaction> = [];

   filter_categories: Array<CategoryFilter> = categories_json.categories.map(
      (category) => {
         return {
            id: category.id,
            name: category.name,
            type: category.type,
            value: false,
         };
      }
   );

   filter_params: FilterParams = {
      transactions: this.transactions,
      min_amount: 0,
      max_amount: 1000000,
      from: this.transactions[0].date.split(" ")[0],
      to: this.transactions[this.transactions.length - 1].date.split(" ")[0],
   };

   constructor() {}

   ngOnInit() {
      this.filtered_transactions = this.filter_transactions(
         this.filter_params,
         this.filter_categories.map((category) => category.id)
      );
      this.filtered.emit(this.filtered_transactions);
      //console.log(this.filtered_transactions);
   }

   onChange() {
      let categories: Array<number> = this.filter_categories
         .filter((category) => category.value)
         .map((category) => category.id);
      if (categories.length === 0) {
         categories = this.filter_categories.map((category) => category.id);
      }
      this.filtered_transactions = this.filter_transactions(
         this.filter_params,
         categories
      );
      this.filtered.emit(this.filtered_transactions);
      //console.log(this.filtered_transactions);
   }

   filter_transactions(
      filter_params: FilterParams,
      filter_categories: Array<number>
   ): Array<Transaction> {
      let filtered = filter_params.transactions.filter((transaction) => {
         let amount = transaction.amount;
         let date = transaction.date;
         date = date.split(" ")[0];
         let category = transaction.category_id;
         return (
            amount >= filter_params.min_amount &&
            amount <= filter_params.max_amount &&
            date >= filter_params.from &&
            date <= filter_params.to &&
            filter_categories.includes(category)
         );
      });
      return filtered;
   }
}
