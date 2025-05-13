import { PROVIDERS } from 'src/const/PROVIDERS';
import { Category } from './categories.model';

export const categoriesProviders = [
  {
    provide: PROVIDERS.CATEGORIES,
    useValue: Category,
  },
];
