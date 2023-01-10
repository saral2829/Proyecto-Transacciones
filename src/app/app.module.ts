import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateNewCategoryComponent } from './Componente/create-new-category/create-new-category.component';
import { CategoryComponent } from './Componente/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewCategoryComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
