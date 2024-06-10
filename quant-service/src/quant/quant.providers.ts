import { Quant } from './entities/quant.entity';

export const quantProviders = [
  {
    provide: 'QUANT_REPOSITORY',
    useValue: Quant,
  },
];
