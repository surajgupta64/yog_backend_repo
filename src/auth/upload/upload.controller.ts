import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FirebaseStorageService } from '../storage/firebase.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private readonly firebaseService: FirebaseStorageService) {}

  @Post('add')
  @UseInterceptors(FileInterceptor('image'))
  async createFile(
    @Body() body: any,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<any> {
    try {
      const downloadUrl = await this.firebaseService.uploadFile(
        file,
        body.ogurl,
      );
      return downloadUrl;
    } catch (error) {
      throw error;
    }
  }

  @Post('remove')
  async deleteFile(@Body() body: any): Promise<any> {
    try {
      const data = await this.firebaseService.removeFile(body.fileName);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
