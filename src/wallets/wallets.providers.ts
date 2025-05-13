import { PROVIDERS } from 'src/const/PROVIDERS';
import { Wallet } from './wallets.model';

export const walletsProviders = [
  {
    provide: PROVIDERS.WALLETS,
    useValue: Wallet,
  },
];
