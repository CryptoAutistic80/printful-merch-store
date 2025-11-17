import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { StripeService } from './service';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'STRIPE_CLIENT',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const secret = config.get<string>('STRIPE_SECRET_KEY');
        if (!secret) {
          return null;
        }
        return new Stripe(secret, { apiVersion: '2025-10-29.clover' });
      },
    },
    StripeService,
  ],
  exports: [StripeService],
})
export class StripeModule {}
