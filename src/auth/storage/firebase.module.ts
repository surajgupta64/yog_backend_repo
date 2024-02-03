// firebase.module.ts
import { Module } from '@nestjs/common';
import { FirebaseStorageService } from './firebase.service';
import { firebaseAdmin } from './firebase.config';

@Module({
  providers: [FirebaseStorageService],
  exports: [FirebaseStorageService],
})
export class FirebaseModule {}
