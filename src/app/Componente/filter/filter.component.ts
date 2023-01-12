import { Component, OnInit } from '@angular/core';
import { Transaction, FilterParams } from '../../models/transaction.model';
import { FormGroup } from '@angular/forms';
import data_json from '../../transactions.json';
import categories_json from '../../categories.json';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterForm: FormGroup | any;

  transactions: Array<Transaction> = data_json.transactions;
  filtered_transactions: Array<Transaction> = [];
  
  // model: FilterParams = {
  //   min_amount: 0,
  //   max_amount: 1000000,
  //   from: new Date("01/01/2020"), // format: "mm/dd/yyyy"
  //   to: new Date(),
  //   categories: categories_json.categories.map(category => category.id)
  // }

  model: FilterParams = {
    min_amount: 0,
    max_amount: 1000,
    from: new Date("01/01/2022"),
    to: new Date("01/02/2022"),
    categories: [1, 2, 3, 4, 5, 6]
  }

  constructor() { }

  ngOnInit(): void {
  }

  filter (transactions: Array<Transaction> , amount_min: number, amount_max: number, from: Date, to: Date, categories: Array<number>): Array<Transaction> {
    let filtered = transactions.filter(transaction => {
      let amount = transaction.amount
      let date = new Date(transaction.date)
      date = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      let category_id = transaction.category_id
      return amount >= amount_min && amount <= amount_max && date >= from && date <= to && categories.includes(category_id)  
    })
    return filtered
  }

  onClick() {
    this.filtered_transactions = this.filter(this.transactions, this.model.min_amount, this.model.max_amount, this.model.from, this.model.to, this.model.categories)
    console.log(this.filtered_transactions)
  }

}
