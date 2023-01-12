import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  visibleNewCategoryPopup: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  addCategory(): void {
    this.visibleNewCategoryPopup = true;
  }

  closePopup(): void {
    this.visibleNewCategoryPopup = false;
  }
}
