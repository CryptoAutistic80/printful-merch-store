import { Module } from '@nestjs/common';
import { PaymentsController } from './controller';
import { PaymentsService } from './service';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
