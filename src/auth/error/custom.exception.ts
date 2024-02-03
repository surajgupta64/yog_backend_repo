import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    console.log('data', exception);

    const status =
      exception instanceof Error
        ? HttpStatus.INTERNAL_SERVER_ERROR
        : HttpStatus.BAD_REQUEST;

    if (exception.code === '23505') {
      response.status(status).json({
        statusCode: HttpStatus.CONFLICT,
        message: 'failed',
        errorMessage: 'Database error : ' + exception?.response?.error,
        error: `Duplicate entry : ` + exception.driverError.detail,
      });
    } else if (exception.code === '23503') {
      response.status(HttpStatus.CONFLICT).json({
        statusCode: HttpStatus.CONFLICT,
        message: 'failed',
        error: `Duplicate entry : ` + exception.driverError.detail,
      });
    } else {
      response.status(HttpStatus.CONFLICT).json(
        exception?.response
          ? {
              ...exception.response,
            }
          : {
              ...exception,
            },
      );
    }
  }
}
