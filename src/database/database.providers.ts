import { Sequelize } from 'sequelize-typescript';
import { Category } from 'src/categories/categories.model';
import { Goal } from 'src/goals/goals.model';
import { Transaction } from 'src/transactions/transactions.model';
import { User } from 'src/users/users.model';
import { Wallet } from 'src/wallets/wallets.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
      });
      sequelize.addModels([User, Category, Transaction, Wallet, Goal]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
