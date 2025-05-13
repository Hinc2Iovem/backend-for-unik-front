import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Wallet } from 'src/wallets/wallets.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'goals' })
export class Goal extends Model<Goal, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

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
  name: string;

  @Column
  targetAmount: number;

  @Column
  dueDate: Date;
}
