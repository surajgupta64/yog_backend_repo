import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { OrderModule } from './order/order.module';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { BullModule } from '@nestjs/bull';
import { CATEGORY_QUEUE } from './constants';
import { BullBoardModule } from '@nestql/bull-board';
import { FirebaseModule } from './auth/storage/firebase.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { PartnerModule } from './partner/partner.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.PORT),
      username: process.env.DB_USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [process.env.ENTITIES],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/static',
    }),
    UserModule,
    OrderModule,
    CategoryModule,
    AuthModule,
    FirebaseModule,
    BullModule.forRootAsync({
      useFactory: () => ({
        redis: {
          host: 'localhost',
          port: 6379,
        },
      }),
    }),
    BullBoardModule.register(),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    SubCategoryModule,
    PartnerModule,
  ],
  providers: [AppService],
})
export class AppModule {}
