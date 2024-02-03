import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CommonDto } from 'src/auth/common/common.dto';

export class CreateCategoryDto extends CommonDto {
  @ApiProperty({
    example: 'name',
    description: 'Category Name',
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    example: 'description',
    description: 'Category Description',
  })
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({
    example: 'image',
    description: 'Category Image',
  })
  @IsString()
  @IsNotEmpty()
  readonly image: string;
}
