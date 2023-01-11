import { Component, OnInit } from '@angular/core';

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
