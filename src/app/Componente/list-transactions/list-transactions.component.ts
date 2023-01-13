import { Component, Input } from "@angular/core";
import {
   Category,
   Transaction,
   TransactionDetails,
   TransactionsByDate,
} from "../../models/transaction.model";
import categories_json from "../../categories.json";

@Component({
   selector: "app-list-transactions",
   templateUrl: "./list-transactions.component.html",
   styleUrls: ["./list-transactions.component.css"],
})
export class ListTransactionsComponent {
   @Input() filtered: Array<Transaction> = [];

   transactions_by_date: Array<TransactionsByDate> = [];

   constructor() {}

   ngOnChanges() {
      this.transactions_by_date = this.groupByDate(this.filtered);
      //console.log(this.transactions_by_date);
   }

   // Group transactions by date
   groupByDate(filtered: Array<Transaction>): Array<TransactionsByDate> {
      // Group transactions by date
      const groups = filtered.reduce(
         (groups: any, transaction: Transaction) => {
            const date = transaction.date.split(" ")[0];
            if (!groups[date]) {
               groups[date] = [];
            }
            groups[date].push(transaction);
            return groups;
         },
         {}
      );
      console.log(groups);
      // Create an array of objects with date and transactions
      const groupArrays = Object.keys(groups).map((date) => {
         return {
            date,
            transactions: groups[date].map((transaction: Transaction) => {
               let category: Category | any = categories_json.categories.find(
                  (category: Category) =>
                     category.id === transaction.category_id
               );
               return {
                  category: category.name,
                  icon: category.icon,
                  amount: transaction.amount,
                  type: category.type,
                  color: category.color,
               };
            }),
         };
      });
      return groupArrays;
   }

   // Calculate total amount of transactions by type per day
   getTotal(transactions: Array<TransactionDetails>) {
      let total = 0;
      transactions.forEach((transaction) => {
         let sign = transaction.type === "income" ? 1 : -1;
         total += sign * transaction.amount;
      });
      return total;
   }
}
