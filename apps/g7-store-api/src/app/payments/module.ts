import { Module } from '@nestjs/common';
import { PaymentsController } from './controller';
import { PaymentsService } from './service';
import { StripeModule } from '../stripe/module';
import { PrintfulModule } from '../printful/module';
import { OrdersModule } from '../orders/module';

@Module({
  imports: [StripeModule, PrintfulModule, OrdersModule],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
