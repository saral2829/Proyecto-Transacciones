export class Transaction {
   id!: number;
   amount!: number;
   date!: string; // format: "YYYY-MM-DD HH:MM:SS"
   category_id!: number;
}

export class Category {
   id!: number;
   name!: string;
   icon!: string;
   type!: string;
}

export class CategoryFilter {
   id!: number;
   name!: string;
   type!: string;
   value!: boolean;
}

export class FilterParams {
   transactions!: Array<Transaction>;
   min_amount!: number;
   max_amount!: number;
   from!: string;
   to!: string;
}

export class TransactionDetails {
   category!: string;
   icon!: string;
   amount!: number;
   type!: string;
}

export class TransactionsByDate {
   date!: string;
   transactions!: Array<TransactionDetails>;
}
