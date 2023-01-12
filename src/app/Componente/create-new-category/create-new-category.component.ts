import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../../models/category';

@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css'],
})
export class CreateNewCategoryComponent {
  @Input() visible: boolean = false;

  @Output() onClose = new EventEmitter<boolean>();

  @Output() onCreate = new EventEmitter<Category>();

  close() {
    this.onClose.emit();
  }

  create(): void {
    this.onCreate.emit({
      id: 2,
      name: 'Groceries',
      icon: 'groceries',
      type: 'expense',
      color: 'dark-orange',
      total: '100',
    });

    this.close();
  }
}
