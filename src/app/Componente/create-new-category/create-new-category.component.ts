import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NewCategory } from "../../models/new-category.model";

@Component({
   selector: "app-create-new-category",
   templateUrl: "./create-new-category.component.html",
   styleUrls: ["./create-new-category.component.css"],
})
export class CreateNewCategoryComponent {
   @Input() visible: boolean = false;
   name: string = "";
   type: string = "";
   color: string = "";
   icon: string = "";

   newCategory!: NewCategory;

   @Output() onClose = new EventEmitter<boolean>();

   @Output() onCreate = new EventEmitter<NewCategory>();

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
      this.newCategory = {
         name: this.name,
         icon: this.icon,
         type: this.type,
         color: this.color,
         total: "0",
      };

      this.onCreate.emit(this.newCategory);

      this.close();

      this.name = "";
      this.type = "";
      this.color = "";
      this.icon = "";

      console.log("---------------------------");
      console.log(this.newCategory);
   }
}
