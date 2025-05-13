import { Inject, Injectable } from '@nestjs/common';
import { CreateGoalDto } from './dto/create-goal.dto';
import { Goal } from './goals.model';
import { PROVIDERS } from 'src/const/PROVIDERS';

@Injectable()
export class GoalsService {
  constructor(
    @Inject(PROVIDERS.GOALS)
    private goalRepository: typeof Goal,
  ) {}

  async create(dto: CreateGoalDto) {
    return this.goalRepository.create(dto);
  }

  async findByUser(userId: number) {
    return this.goalRepository.findAll({ where: { userId } });
  }
}
