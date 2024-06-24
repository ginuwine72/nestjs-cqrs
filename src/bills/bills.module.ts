import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BILL_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'nestjs-cqrs-bill',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'nestjs-cqrs-bill-consumer'
          }
        }
      },
    ]),
  ],
  controllers: [BillsController],
  providers: [BillsService],
})
export class BillsModule {}
