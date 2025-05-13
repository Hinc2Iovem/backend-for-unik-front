import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Transaction } from 'src/transactions/transactions.model';
import { User } from 'src/users/users.model';
import { Wallet } from 'src/wallets/wallets.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column
  name: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Wallet)
  @Column
  walletId: number;

  @BelongsTo(() => Wallet)
  wallet: Wallet;

  @Column
  backgroundColor: string;

  @Column
  color: string;

  @HasMany(() => Transaction)
  transactions: Transaction[];
}
