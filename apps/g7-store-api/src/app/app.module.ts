import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { loadEnvConfig } from '@g7/config';
import { PaymentsModule } from './payments/module';
import { StripeModule } from './stripe/module';
import { PrintfulModule } from './printful/module';
import { OrdersModule } from './orders/module';

const env = loadEnvConfig();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => env],
    }),
    StripeModule,
    PrintfulModule,
    OrdersModule,
    PaymentsModule,
  ],
})
export class AppModule {}
