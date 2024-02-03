import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FirebaseStorageService } from 'src/auth/storage/firebase.service';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryController } from './sub-category.controller';
import { SubCategory } from './entities/sub-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategory])],
  providers: [SubCategoryService, FirebaseStorageService],
  exports: [SubCategoryService],
  controllers: [SubCategoryController],
})
export class SubCategoryModule {}
