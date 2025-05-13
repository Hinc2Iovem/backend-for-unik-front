import { Inject, Injectable } from '@nestjs/common';
import { PROVIDERS } from 'src/const/PROVIDERS';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(PROVIDERS.CATEGORIES)
    private categoryRepository: typeof Category,
  ) {}
  create(dto: CreateCategoryDto) {
    return this.categoryRepository.create(dto);
  }

  findAllByUserId(userId: number) {
    return this.categoryRepository.findAll({ where: { userId } });
  }

  findOne(id: number) {
    return this.categoryRepository.findByPk(id);
  }

  update(id: number, dto: UpdateCategoryDto) {
    return this.categoryRepository.update(dto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.categoryRepository.destroy({ where: { id } });
  }
}
