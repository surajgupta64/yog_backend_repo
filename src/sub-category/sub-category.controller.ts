import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubCategory } from './entities/sub-category.entity';
import { Crud, CrudController, ParsedRequest } from '@nestjsx/crud';
import { SubCategoryService } from './sub-category.service';
import { CustomResponseInterceptor } from 'src/auth/interceptor/custom-response.interceptor';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';

@Crud({
  model: { type: SubCategory },
  dto: {
    create: CreateSubCategoryDto,
    update: UpdateSubCategoryDto,
  },
})
@UseInterceptors(CustomResponseInterceptor)
@ApiTags('sub category')
@Controller('sub-category')
export class SubCategoryController implements CrudController<SubCategory> {
  constructor(public service: SubCategoryService) {}

  @Get('category/:id')
  async find(@Param('id') id: string) {
    return await this.service.categoryById(id);
  }
}
