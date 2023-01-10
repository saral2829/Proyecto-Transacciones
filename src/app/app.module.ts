import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateNewCategoryComponent } from './Componente/create-new-category/create-new-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewCategoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
