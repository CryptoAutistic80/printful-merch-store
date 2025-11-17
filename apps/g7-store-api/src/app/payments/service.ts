import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CheckoutSessionDto } from './dto';

@Injectable()
export class PaymentsService {
  private readonly logger = new Logger(PaymentsService.name);

  constructor(private readonly config: ConfigService) {}

  private getExternalStoreUrl() {
    return this.config.get<string>('STORE_URL') ?? 'https://store.groupseven.life';
  }

  async createCheckoutSession(payload: CheckoutSessionDto) {
    this.logger.log('Checkout handled by external Spring storefront; forwarding request.');
    const externalStoreUrl = this.getExternalStoreUrl();

    return {
      externalStoreUrl,
      message:
        'Checkout and payment now run through our Spring (Teespring) storefront. Use the link below to complete your order.',
      receivedCart: payload.cart,
    };
  }

  async handleStripeWebhook(rawBody: Buffer, signature: string | undefined) {
    this.logger.warn('Stripe webhooks are disabled; checkout is fully handled by Spring storefront.');
    this.logger.debug(`Payload length: ${rawBody.byteLength}, signature: ${signature ?? 'none'}`);
  }
}
