import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       clientId: 'nestjs-cqrs-client',
  //       brokers: ['localhost:9092'],
  //     },
  //     consumer: {
  //       groupId: 'nestjs-cqrs-consumer'
  //     }
  //   }
  // });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
