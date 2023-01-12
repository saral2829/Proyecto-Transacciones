import { Component, OnInit } from "@angular/core";
import { Transaction } from "../../models/transaction.model";

@Component({
   selector: "app-transactions",
   templateUrl: "./transactions.component.html",
   styleUrls: ["./transactions.component.css"],
})
export class TransactionsComponent {
   filtered: Array<Transaction> = [];

   constructor() {}

   getFilteredTransactions(transactions: Array<Transaction>) {
      this.filtered = transactions;
   }
}
