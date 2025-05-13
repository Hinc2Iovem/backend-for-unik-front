import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { GoalsController } from './goals.controller';
import { GoalsService } from './goals.service';
import { goalsProviders } from './goals.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [GoalsController],
  providers: [GoalsService, ...goalsProviders],
  exports: [GoalsService],
})
export class GoalsModule {}
