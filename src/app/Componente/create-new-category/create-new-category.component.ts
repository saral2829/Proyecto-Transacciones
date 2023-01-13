import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../../models/category';

@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css'],
})
export class CreateNewCategoryComponent {
  @Input() visible: boolean = false;
  name: string = '';
  type: string = '';
  color: string = '';
  icon: string = '';
  // newCategory = {
  //   name: '',
  //   type: '',
  // };

  @Output() onClose = new EventEmitter<boolean>();

  @Output() onCreate = new EventEmitter<Category>();

  close() {
    this.onClose.emit();
  }

  nameValue(): void {
    this.name = this.name;
    this.type = this.type;
    this.color = this.color;
  }

  selectColor(color: string): void {
    this.color = color;
  }

  selectIcon(icon: string): void {
    this.icon = icon;
  }

  create(): void {
    this.onCreate.emit({
      id: 2,
      name: this.name,
      icon: this.icon,
      type: this.type,
      color: this.color,
      total: '0',
    });

    this.close();

    console.log(this.name);
    console.log(this.type);
    console.log(this.color);
    console.log(this.icon);
  }
}
