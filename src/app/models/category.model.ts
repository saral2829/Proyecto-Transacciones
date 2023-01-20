export interface Category {
  id: number;
  name: string;
  icon: string;
  type: string;
  color: string;
}

export interface TotalCategory {
  name: string;
  icon: string;
  color: string;
  total: number;
}

export interface ApiCategory {
  id: number;
  name: string;
  icon: string;
  transaction_type: string;
  color: string;
  transactions: ApiCategoryTransaction[];
}

export interface ApiCategoryTransaction {
  id: number;
  amount: number;
  date: string;
  notes: null | string;
}
