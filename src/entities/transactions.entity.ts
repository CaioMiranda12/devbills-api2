import { Category } from './category.entity';

export enum TransactionType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

type TransactionProps = {
  _id?: string;
  title: string;
  amount: number;
  date: Date;
  category: Category;
  type: TransactionType;
};

export class Transaction {
  public _id?: string;
  public title: string;
  public amount: number;
  public date: Date;
  public category: Category;
  public type: TransactionType;

  constructor({ _id, amount, category, date, type, title }: TransactionProps) {
    this._id = _id;
    this.title = title;
    this.amount = amount;
    this.category = new Category(category);
    this.date = new Date(date);
    this.type = type;
  }
}
