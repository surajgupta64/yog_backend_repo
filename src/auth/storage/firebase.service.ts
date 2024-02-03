// firebase-storage.service.ts
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { firebaseAdmin } from './firebase.config';
import { File } from '@google-cloud/storage';

@Injectable()
export class FirebaseStorageService {
  private readonly storage = firebaseAdmin.storage();

  async uploadFile(
    file: Express.Multer.File,
    oldFileName?: string,
  ): Promise<any> {
    const bucket = this.storage.bucket();

    // If an old file name is provided, remove the old file before uploading the new one
    if (oldFileName) {
      await this.removeFile(oldFileName);
    }

    const fileName = this.generateFileName(file.originalname);

    const fileBuffer = Buffer.from(file.buffer);
    const fileUpload = bucket.file(fileName);

    await fileUpload.save(fileBuffer, {
      metadata: {
        contentType: file.mimetype,
      },
    });
    try {
      const downloadUrl = await this.generateDownloadUrl(fileUpload);
      return {
        statusCode: 200,
        message: 'success',
        data: { fileName: fileName, fileUrl: downloadUrl },
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: 'failed',
        error: {
          code: 500,
          message: 'Internal Server Error',
          details: 'Failed to upload the file. Please try again later.',
        },
      };
    }
  }

  async removeFile(fileName: string): Promise<any> {
    const bucket = this.storage.bucket();
    const file = bucket.file(fileName);

    // Delete the file
    try {
      const data = await file.delete();
    } catch (error) {
      return {
        statusCode: 500,
        message: 'failed',
        error: {
          type: 'Database Error',
          description: 'Failed to retrieve file from storage.',
          details: 'The specified file does not exist in the storage.',
          file: fileName,
        },
      };
    }
    return {
      statusCode: 200,
      message: 'success',
      details: 'file deleted successfully',
    };
  }

  private generateFileName(originalname: string): string {
    return `${Date.now()}_${originalname}`;
  }

  private async generateDownloadUrl(file: File): Promise<string> {
    const downloadUrl = await file.getSignedUrl({
      action: 'read',
      expires: '03-09-2491', // Replace with a future date
    });

    return downloadUrl[0];
  }
}
