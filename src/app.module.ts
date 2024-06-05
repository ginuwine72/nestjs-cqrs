import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import appConfig from './config/app.config';
import { UserEntity } from './users/entities/user.entity';
import { EventEntity } from './users/entities/event.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.test', '.env.production'],
      load: [appConfig],
    }),
    TypeOrmModule.forFeature(
      [UserEntity],
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        database: 'nestjs',
        username: 'root',
        password: '',
        synchronize: true,
      }),
    TypeOrmModule.forFeature(
      [EventEntity],
      {
        type: 'sqlite',
        database: 'nestjs.sqlite',
        synchronize: true,
      }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
