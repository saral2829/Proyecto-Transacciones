import { Component, Output, EventEmitter } from "@angular/core";
import {
   Transaction,
   FilterParams,
   CategoryFilter,
} from "../../models/transaction.model";
import { FormGroup } from "@angular/forms";
import { CategoryService } from "../../services/category.service";

@Component({
   selector: "app-filter",
   templateUrl: "./filter.component.html",
   styleUrls: ["./filter.component.css"],
})
export class FilterComponent {
   @Output() filtered = new EventEmitter<Array<Transaction>>();

   transactions: Array<Transaction> = [];
   categories_json: any = [];

   constructor(private categoryService: CategoryService) {
      this.transactions = this.categoryService.transactions;
      this.categories_json = this.categoryService.categories;
   }

   filterForm: FormGroup | any;
   filtered_transactions: Array<Transaction> = [];
   filter_params: FilterParams = {
      transactions: [],
      min_amount: "",
      max_amount: "",
      from: "",
      to: "",
   };
   filter_categories: Array<CategoryFilter> = [];

   ngOnInit() {
      this.filter_params =
         this.transactions.length > 0
            ? {
                 transactions: this.transactions,
                 min_amount: "",
                 max_amount: "",
                 from: this.transactions[0].date.split(" ")[0],
                 to: this.transactions[this.transactions.length - 1].date.split(
                    " "
                 )[0],
              }
            : {
                 transactions: [],
                 min_amount: "",
                 max_amount: "",
                 from: "",
                 to: "",
              };

      this.filter_categories =
         this.categories_json.length > 0
            ? this.categories_json.map((category: any) => {
                 return {
                    id: category.id,
                    name: category.name,
                    value: false,
                 };
              })
            : [];

      this.filtered_transactions = this.filter_transactions(
         this.filter_params,
         this.filter_categories.map((category) => category.id)
      );
      this.filtered.emit(this.filtered_transactions);
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
            amount >=
               (filter_params.min_amount === ""
                  ? 0
                  : filter_params.min_amount) &&
            amount <=
               (filter_params.max_amount === ""
                  ? 999999999
                  : filter_params.max_amount) &&
            date >= filter_params.from &&
            date <= filter_params.to &&
            filter_categories.includes(category)
         );
      });
      return filtered;
   }
}
