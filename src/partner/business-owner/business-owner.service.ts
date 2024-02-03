import { Injectable } from '@nestjs/common';
import { CreateBusinessOwnerDto } from './dto/create-business-owner.dto';
import { UpdateBusinessOwnerDto } from './dto/update-business-owner.dto';

@Injectable()
export class BusinessOwnerService {
  create(createBusinessOwnerDto: CreateBusinessOwnerDto) {
    return 'This action adds a new businessOwner';
  }

  findAll() {
    return `This action returns all businessOwner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessOwner`;
  }

  update(id: number, updateBusinessOwnerDto: UpdateBusinessOwnerDto) {
    return `This action updates a #${id} businessOwner`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessOwner`;
  }
}
