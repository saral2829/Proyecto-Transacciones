import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsComponent } from './Componente/budgets/budgets.component';
import { CategoryComponent } from './Componente/category/category.component';
import { DashboardComponent } from './Componente/dashboard/dashboard.component';
import { TransactionsContentComponent } from './Componente/transactions-content/transactions-content.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'categories',
        component: CategoryComponent,
      },
      {
        path: 'transactions',
        component: TransactionsContentComponent,
      },
      {
        path: 'budgets',
        component: BudgetsComponent,
      },
    ],
  },
  // {
  //   path: 'budgets',
  //   component: BudgetsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
