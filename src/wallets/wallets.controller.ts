import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  create(@Body() dto: CreateWalletDto) {
    return this.walletsService.create(dto);
  }

  @Get()
  findByUser(@Query('userId') userId: number) {
    return this.walletsService.findByUserId(userId);
  }
}
