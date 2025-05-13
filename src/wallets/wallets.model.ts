import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from 'src/categories/categories.model';
import { Goal } from 'src/goals/goals.model';
import { Transaction } from 'src/transactions/transactions.model';
import { User } from 'src/users/users.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'wallets' })
export class Wallet extends Model<Wallet, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column
  name: string;

  @Column
  balance: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Category)
  categories: Category[];

  @HasMany(() => Transaction)
  transactions: Transaction[];

  @HasMany(() => Goal)
  goals: Goal[];
}
