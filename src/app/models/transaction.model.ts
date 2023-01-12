export class Transaction {
   id!: number;
   amount!: number;
   date!: string; // format: "mm/dd/yyyy hh:mm:ss"
   category_id!: number;
}

export class FilterParams {
   min_amount!: number;
   max_amount!: number;
   from!: Date;
   to!: Date;
   categories!: Array<number>;
}

export class Category {
   id!: number;
   name!: string;
   icon!: string;
   type!: string;
}