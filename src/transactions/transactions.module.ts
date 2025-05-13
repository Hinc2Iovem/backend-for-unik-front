import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TransactionService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { transactionsProviders } from './transactions.providers';

@Module({
  imports: [DatabaseModule],
  providers: [TransactionService, ...transactionsProviders],
  controllers: [TransactionsController],
  exports: [TransactionService],
})
export class TransactionModule {}
