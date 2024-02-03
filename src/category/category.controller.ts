import {
  Controller,
  UseInterceptors,
  UploadedFile,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { Crud, CrudController, CrudRequest, Override } from '@nestjsx/crud';
import { FileInterceptor } from '@nestjs/platform-express';
import { Category } from './entities/category.entity';
import { CategoryService } from './category.service';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { CATEGORY_QUEUE } from 'src/constants';
import { FirebaseStorageService } from 'src/auth/storage/firebase.service';
import { CustomResponseInterceptor } from 'src/auth/interceptor/custom-response.interceptor';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Crud({
  model: { type: Category },
  dto: {
    create: CreateCategoryDto,
    update: UpdateCategoryDto,
  },
})
@UseInterceptors(CustomResponseInterceptor)
@ApiTags('category')
@Controller('category')
export class CategoryController implements CrudController<Category> {
  constructor(public service: CategoryService) {}
}
