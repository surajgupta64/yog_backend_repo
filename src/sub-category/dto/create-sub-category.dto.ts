import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { CommonDto } from 'src/auth/common/common.dto';

export class CreateSubCategoryDto extends CommonDto {
  @ApiProperty({
    example: 'name',
    description: 'sub Category Name',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 'description',
    description: 'sub Category Description',
  })
  @IsString()
  readonly description: string;

  @ApiProperty({
    example: 'image',
    description: 'sub Category Image',
  })
  @IsString()
  readonly image: string;

  @ApiProperty({
    example: 2,
    description: 'Category id for relation',
  })
  @IsNumber()
  readonly categoryId: number;
}
