import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css'],
})
export class CreateNewCategoryComponent {
  @Input() visible: boolean = false;

  @Output() onClose = new EventEmitter<boolean>();

  close() {
    this.onClose.emit();
  }
}
