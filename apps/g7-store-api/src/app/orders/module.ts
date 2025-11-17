import { Module } from '@nestjs/common';
import { OrdersRepository } from './repository';
import { OrdersService } from './service';

@Module({
  providers: [OrdersRepository, OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
