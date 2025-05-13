import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { GoalsService } from './goals.service';
import { CreateGoalDto } from './dto/create-goal.dto';

@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  create(@Body() dto: CreateGoalDto) {
    return this.goalsService.create(dto);
  }

  @Get()
  findByUser(@Query('userId') userId: number) {
    return this.goalsService.findByUser(userId);
  }
}
