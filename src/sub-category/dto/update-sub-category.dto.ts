import { PartialType } from '@nestjs/swagger';
import { CreateSubCategoryDto } from './create-sub-category.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateSubCategoryDto extends PartialType(CreateSubCategoryDto) {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsString()
  @IsOptional()
  readonly image: string;

  @IsBoolean()
  @IsOptional()
  readonly isActive: boolean;
}
