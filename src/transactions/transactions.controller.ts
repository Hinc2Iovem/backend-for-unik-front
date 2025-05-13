import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { TransactionService } from './transactions.service';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll(
    @Query('userId') userId: number,
    @Query('categoryId') categoryId?: number,
    @Query('minAmount') minAmount?: string,
    @Query('maxAmount') maxAmount?: string,
    @Query('name') name?: string,
  ) {
    return this.transactionsService.findAll({
      userId,
      filters: {
        categoryId,
        priceMin: minAmount ? parseFloat(minAmount) : undefined,
        priceMax: maxAmount ? parseFloat(maxAmount) : undefined,
        name,
      },
    });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.transactionsService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateTransactionDto) {
    return this.transactionsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.transactionsService.delete(id);
  }
}
