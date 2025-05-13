import { Inject, Injectable } from '@nestjs/common';
import { Transaction } from './transactions.model';
import { PROVIDERS } from 'src/const/PROVIDERS';
import { Op } from 'sequelize';

@Injectable()
export class TransactionService {
  constructor(
    @Inject(PROVIDERS.TRANSACTIONS)
    private transactionRepository: typeof Transaction,
  ) {}

  create(data: Partial<Transaction>) {
    return this.transactionRepository.create(data);
  }

  async findAll({
    filters,
    userId,
  }: {
    userId: number;
    filters: {
      name?: string;
      categoryId?: number;
      priceMin?: number;
      priceMax?: number;
    };
  }) {
    const where: any = { userId };

    if (filters.name) where.name = { [Op.iLike]: `%${filters.name}%` };
    if (filters.categoryId) where.categoryId = filters.categoryId;
    if (filters.priceMin || filters.priceMax)
      where.amount = {
        ...(filters.priceMin ? { [Op.gte]: filters.priceMin } : {}),
        ...(filters.priceMax ? { [Op.lte]: filters.priceMax } : {}),
      };

    return this.transactionRepository.findAll({ where });
  }

  findById(id: number) {
    return this.transactionRepository.findByPk(id);
  }

  update(id: number, data: Partial<Transaction>) {
    return this.transactionRepository.update(data, { where: { id } });
  }

  delete(id: number) {
    return this.transactionRepository.destroy({ where: { id } });
  }
}
