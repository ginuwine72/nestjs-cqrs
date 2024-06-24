import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import appConfig from './config/app.config';
import { MongooseModule } from '@nestjs/mongoose';
import { BillsModule } from './bills/bills.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.development', '.env.test', '.env.production'],
      load: [appConfig],
    }),
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        database: 'nestjs-cqrs',
        username: 'root',
        password: 'root',
        autoLoadEntities: true,
        synchronize: true,
      }
    ),
    UsersModule,
    OrdersModule,
    ProductsModule,
    BillsModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
