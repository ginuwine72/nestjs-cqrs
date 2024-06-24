import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntity } from './entities/user.entity';
import { EventEntity } from './entities/event.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'nestjs-cqrs-user',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'nestjs-cqrs-user-consumer'
          }
        }
      },
    ]),
    TypeOrmModule.forFeature([UserEntity, EventEntity])
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
