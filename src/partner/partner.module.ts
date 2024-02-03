import { Module } from '@nestjs/common';
import { BusinessOwnerModule } from './business-owner/business-owner.module';

@Module({
  imports: [BusinessOwnerModule],
})
export class PartnerModule {}
