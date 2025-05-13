import { PROVIDERS } from 'src/const/PROVIDERS';
import { Transaction } from './transactions.model';

export const transactionsProviders = [
  {
    provide: PROVIDERS.TRANSACTIONS,
    useValue: Transaction,
  },
];
