import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from 'src/categories/categories.model';
import { User } from 'src/users/users.model';
import { Wallet } from 'src/wallets/wallets.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'transactions' })
export class Transaction extends Model<Transaction, UserCreationAttrs> {
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

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  @Column
  amount: string;

  @Column
  date: Date;

  @Column
  balancePrior: string;

  @Column({
    type: DataType.ENUM('expenditure', 'income'),
  })
  type: 'expenditure' | 'income';

  @Column({ allowNull: true })
  dischargeTime: string | null;

  @Column({
    type: DataType.ENUM('sec', 'min', 'hr', 'd', 'm', 'y'),
    allowNull: true,
  })
  dischargeUnit: 'sec' | 'min' | 'hr' | 'd' | 'm' | 'y';
}
