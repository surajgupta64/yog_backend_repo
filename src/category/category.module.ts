import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { BullModule } from '@nestjs/bull';
import { CATEGORY_QUEUE } from 'src/constants';
import { CategoryConsumer } from './category.consumer';
import { FirebaseStorageService } from 'src/auth/storage/firebase.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    BullModule.registerQueueAsync({
      name: CATEGORY_QUEUE,
    }),
  ],
  providers: [CategoryService, CategoryConsumer, FirebaseStorageService],
  exports: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
