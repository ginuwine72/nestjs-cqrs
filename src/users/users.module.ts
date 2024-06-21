import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntity } from './entities/user.entity';
import { EventEntity } from './entities/event.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [UserEntity, EventEntity],
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        database: 'nestjs-cqrs',
        username: 'root',
        password: 'root',
        synchronize: true,
      }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
