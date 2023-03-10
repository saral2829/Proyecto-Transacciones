import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateNewCategoryComponent } from './Componente/create-new-category/create-new-category.component';
import { FilterComponent } from './Componente/filter/filter.component';
import { TransactionsComponent } from './Componente/transactions/transactions.component';
import { ListTransactionsComponent } from './Componente/list-transactions/list-transactions.component';
import { CategoryComponent } from './Componente/category/category.component';
import { SidebardComponent } from './Componente/sidebard/sidebard.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BudgetsComponent } from './Componente/budgets/budgets.component';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';
import { DashboardComponent } from './Componente/dashboard/dashboard.component';
import { TransactionsContentComponent } from './Componente/transactions-content/transactions-content.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component'; 
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { NotFoundComponent } from './Componente/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateNewCategoryComponent,
    FilterComponent,
    TransactionsComponent,
    ListTransactionsComponent,
    CategoryComponent,
    SidebardComponent,
    LoginComponent,
    BudgetsComponent,
    DashboardComponent,
    TransactionsContentComponent,
    SignUpComponent,
    NotFoundComponent
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}