import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BusinessOwnerService } from './business-owner.service';
import { CreateBusinessOwnerDto } from './dto/create-business-owner.dto';
import { UpdateBusinessOwnerDto } from './dto/update-business-owner.dto';

@Controller('partner/business-owner')
export class BusinessOwnerController {
  constructor(private readonly businessOwnerService: BusinessOwnerService) {}

  @Post()
  create(@Body() createBusinessOwnerDto: CreateBusinessOwnerDto) {
    return this.businessOwnerService.create(createBusinessOwnerDto);
  }

  @Get()
  findAll() {
    return this.businessOwnerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessOwnerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessOwnerDto: UpdateBusinessOwnerDto,
  ) {
    return this.businessOwnerService.update(+id, updateBusinessOwnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessOwnerService.remove(+id);
  }
}
