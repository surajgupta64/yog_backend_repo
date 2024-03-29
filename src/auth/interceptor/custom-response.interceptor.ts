import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) =>
        data?.data
          ? {
              statusCode: context.switchToHttp().getResponse().statusCode,
              message: 'Success',
              ...data,
            }
          : {
              statusCode: context.switchToHttp().getResponse().statusCode,
              message: 'Success',
              data,
              count: data?.length,
            },
      ),
    );
  }
}
