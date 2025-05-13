import { PROVIDERS } from 'src/const/PROVIDERS';
import { Goal } from './goals.model';

export const goalsProviders = [
  {
    provide: PROVIDERS.GOALS,
    useValue: Goal,
  },
];
