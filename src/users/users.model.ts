import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Goal } from 'src/goals/goals.model';
import { Transaction } from 'src/transactions/transactions.model';
import { Wallet } from 'src/wallets/wallets.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.FLOAT, defaultValue: 0 })
  balance: number;

  @HasMany(() => Wallet)
  wallets: Wallet[];

  @HasMany(() => Transaction)
  transactions: Transaction[];

  @HasMany(() => Goal)
  goals: Goal[];
}
