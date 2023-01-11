import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateNewCategoryComponent } from './Componente/create-new-category/create-new-category.component';
import { FilterComponent } from './Componente/filter/filter.component';
import { TransactionsComponent } from './Componente/transactions/transactions.component';
import { ListTransactionsComponent } from './Componente/list-transactions/list-transactions.component';
import { CategoryComponent } from './Componente/category/category.component';
import { SidebardComponent } from './Componente/sidebard/sidebard.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewCategoryComponent,
    FilterComponent,
    TransactionsComponent,
    ListTransactionsComponent,
    CategoryComponent,
    SidebardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
