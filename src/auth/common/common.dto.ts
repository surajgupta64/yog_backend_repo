import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CommonDto {
  @IsNumber()
  @IsOptional()
  readonly id: number;

  @ApiProperty({
    example: false,
    description: 'active or not',
  })
  @IsBoolean()
  @IsOptional()
  readonly isActive: boolean;

  @ApiProperty({ default: false, nullable: false })
  @IsBoolean()
  @IsOptional()
  readonly isDeleted: boolean;

  @ApiProperty({
    example: '',
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  readonly createdBy: number;

  @ApiProperty({ nullable: false })
  @IsString()
  @IsOptional()
  readonly createdTimestamp: string;

  @ApiProperty({ nullable: true })
  @IsNumber()
  @IsOptional()
  readonly updatedBy: number;

  @ApiProperty({ nullable: true })
  @IsString()
  @IsOptional()
  readonly updatedTimestamp: string;
}
