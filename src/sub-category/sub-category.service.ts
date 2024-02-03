// src/categories/category.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SubCategory } from './entities/sub-category.entity';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';

@Injectable()
export class SubCategoryService extends TypeOrmCrudService<SubCategory> {
  constructor(@InjectRepository(SubCategory) repo: Repository<SubCategory>) {
    super(repo);
  }

  async categoryById(id: string) {
    return await this.repo.find({ where: { categoryId: id } });
  }
}
