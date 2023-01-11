import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css'],
})
export class CreateNewCategoryComponent {
  visible: boolean = true;

  onClose(): void {
    this.visible = false;
  }
}
