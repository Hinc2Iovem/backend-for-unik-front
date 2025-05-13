import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { WalletsController } from './wallets.controller';
import { WalletsService } from './wallets.service';
import { walletsProviders } from './wallets.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [WalletsController],
  providers: [WalletsService, ...walletsProviders],
  exports: [WalletsService],
})
export class WalletsModule {}
