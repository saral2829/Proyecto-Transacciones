import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/Componente/income/income.component.spec.ts
import { IncomeComponent } from './income.component';

describe('IncomeComponent', () => {
  let component: IncomeComponent;
  let fixture: ComponentFixture<IncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeComponent ]
========
import { BudgetsComponent } from './budgets.component';

describe('BudgetsComponent', () => {
  let component: BudgetsComponent;
  let fixture: ComponentFixture<BudgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetsComponent ]
>>>>>>>> 419f014b5d5be8a87d1dbc368df13212f1663114:src/app/Componente/budgets/budgets.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:src/app/Componente/income/income.component.spec.ts
    fixture = TestBed.createComponent(IncomeComponent);
========
    fixture = TestBed.createComponent(BudgetsComponent);
>>>>>>>> 419f014b5d5be8a87d1dbc368df13212f1663114:src/app/Componente/budgets/budgets.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
