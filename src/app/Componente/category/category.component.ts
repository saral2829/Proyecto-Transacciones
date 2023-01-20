import { Component, OnInit } from '@angular/core';
import { Category, TotalCategory } from '../../models/category.model';
import { Transaction } from '../../models/transaction.model';
import { NewCategory } from '../../models/new-category.model';
import data_json from '../../transactions.json';
import categories_json from '../../categories.json';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  month: string =
    new Date().getMonth() + 1 < 10
      ? '0' + (new Date().getMonth() + 1)
      : (new Date().getMonth() + 1).toString();

  previous: string = this.month;
  monthName: string = this.getMonthName(this.month);
  year: string = new Date().getFullYear().toString();
  type: string = 'expense';
  transactions: Array<Transaction> = data_json.transactions;
  sumsByCategory: Array<TotalCategory> = [];
  totalMonth: number = 0;
  visibleNewCategoryPopup: boolean = false;

  constructor() {
    this.sumsByCategory = this.getSumsByCategory(
      this.month,
      this.year,
      this.type
    );
    this.totalMonth = this.getTotalMonth(this.sumsByCategory);
    //console.log(this.sumsByCategory);
    //console.log(this.totalMonth);
  }

  getMonthName(month: string): string {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[parseInt(month) - 1];
  }

  // Update year when month changes
  changeYear(): void {
    let year = parseInt(this.year);
    if (this.month === '01' && this.previous === '12') {
      year++;
    } else if (this.month === '12' && this.previous === '01') {
      year--;
    }
    this.year = year.toString();
  }

  nextMonth(): void {
    this.previous = this.month;
    let month = parseInt(this.month);
    if (month < 12) {
      month++;
      this.month = month < 10 ? '0' + month : month.toString();
    } else {
      this.month = '01';
    }
    this.changeYear(); // Update year
    this.monthName = this.getMonthName(this.month);
    this.onMonthChange(); // Update data
  }

  previousMonth(): void {
    this.previous = this.month;
    let month = parseInt(this.month);
    if (month > 1) {
      month--;
      this.month = month < 10 ? '0' + month : month.toString();
    } else {
      this.month = '12';
    }
    this.changeYear(); // Update year
    this.monthName = this.getMonthName(this.month);
    this.onMonthChange(); // Update data
  }

  // Get transactions of an specific month and year
  getTransactionsByMonth(month: string, year: string): Array<Transaction> {
    let transactions = this.transactions.filter((transaction) => {
      return (
        transaction.date.split('-')[1] === month &&
        transaction.date.split('-')[0] === year
      );
    });
    return transactions;
  }

  // Group transactions by category and type
  getGroupsByCategory(transactions: Array<Transaction>, type: string) {
    const groups: any = transactions.reduce(
      (groups: any, transaction: Transaction) => {
        let category: any = categories_json.categories.find(
          (category) => category.id === transaction.category_id
        );
        if (category.type === type) {
          if (!groups[category.name]) {
            groups[category.name] = [];
          }
          groups[category.name].push(transaction);
        }
        return groups;
      },
      {}
    );
    return groups;
  }

  // Group transactions by date and type
  getSumsByCategory(
    month: string,
    year: string,
    type: string
  ): Array<TotalCategory> {
    // Get transactions of month
    let transactions = this.getTransactionsByMonth(month, year);
    // Group transactions by category
    const groups = this.getGroupsByCategory(transactions, type);
    // Get subtotals of categories by type
    const subtotals = Object.keys(groups).map((category) => {
      let total_category = groups[category].reduce(
        (subtotal: number, transaction: Transaction) => {
          return subtotal + transaction.amount;
        },
        0
      );
      let category_: any = categories_json.categories.find(
        (category_) => category_.name === category
      );
      return {
        name: category_.name,
        icon: category_.icon,
        color: category_.color,
        total: total_category,
      };
    });

    return subtotals;
  }

  // Get total of month by type
  getTotalMonth(subtotals: Array<TotalCategory>): number {
    let total = subtotals.reduce(
      (subtotal: number, totalCategory: TotalCategory) => {
        return subtotal + totalCategory.total;
      },
      0
    );
    return total;
  }

  onMonthChange(): void {
    this.sumsByCategory = this.getSumsByCategory(
      this.month,
      this.year,
      this.type
    );
    this.totalMonth = this.getTotalMonth(this.sumsByCategory);
  }

  onTypeChange(type: string): void {
    this.type = type;
    this.onMonthChange();
  }

  categories: Array<Category> = [
    {
      id: 1,
      name: 'Rent',
      icon: 'rent',
      type: 'expense',
      color: 'gray',
    },
    {
      id: 2,
      name: 'Groceries',
      icon: 'groceries',
      type: 'expense',
      color: 'dark-sky-blue',
    },
    {
      id: 3,
      name: 'Transport',
      icon: 'transport',
      type: 'expense',
      color: 'dark-orange',
    },
    {
      id: 4,
      name: 'Health',
      icon: 'health',
      type: 'income',
      color: 'red',
    },
    {
      id: 5,
      name: 'Gifts',
      icon: 'gifts',
      type: 'income',
      color: 'purple',
    },
    {
      id: 6,
      name: 'Education',
      icon: 'education',
      type: 'expense',
      color: 'blue',
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
