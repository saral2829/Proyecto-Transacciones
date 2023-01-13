export interface Transaction {
   id: number;
   amount: number;
   date: string; // format: "YYYY-MM-DD HH:MM:SS"
   category_id: number;
}

export interface Category {
   id: number;
   name: string;
   icon: string;
   type: string;
   color: string;
}

export interface CategoryFilter {
   id: number;
   name: string;
   type: string;
   value: boolean;
}

export interface FilterParams {
   transactions: Array<Transaction>;
   min_amount: number;
   max_amount: number;
   from: string;
   to: string;
}

export interface TransactionDetails {
   category: string;
   icon: string;
   amount: number;
   type: string;
   color: string;
}

export interface TransactionsByDate {
   date: string;
   transactions: Array<TransactionDetails>;
}
