import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { FirebaseStorageService } from '../storage/firebase.service';

@Module({
  controllers: [UploadController],
  providers: [FirebaseStorageService],
})
export class UploadModule {}
