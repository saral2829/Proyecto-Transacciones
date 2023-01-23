import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../services/category.service";

@Component({
   selector: "app-dashboard",
   templateUrl: "./dashboard.component.html",
   styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
   constructor(private categoryService: CategoryService) {
      this.categoryService.getData();
   }

   ngOnInit(): void {}
}
