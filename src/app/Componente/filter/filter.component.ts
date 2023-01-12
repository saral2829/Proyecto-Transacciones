import { Component, OnInit } from '@angular/core';
import { Transaction, FilterParams } from '../../models/transaction.model';
import { FormGroup } from '@angular/forms';
import data_json from '../../transactions.json';
import categories_json from '../../categories.json';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  items = [
    { value: false, label: 'Rent' },
    { value: false, label: 'Salary' },
    { value: false, label: 'Transport' },
    { value: false, label: 'Education' },
    { value: false, label: 'Groceries' },
    { value: false, label: 'Gifts' },
  ];
}
