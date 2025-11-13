import { Body, Controller, Headers, Post, Req, RawBodyRequest } from '@nestjs/common';
import { PaymentsService } from './service';
import { CheckoutSessionDto } from './dto';
import { Request } from 'express';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('checkout-session')
  createCheckoutSession(@Body() body: CheckoutSessionDto) {
    return this.paymentsService.createCheckoutSession(body);
  }

  @Post('webhooks/stripe')
  async handleStripeWebhook(
    @Req() request: RawBodyRequest<Request>,
    @Headers('stripe-signature') signature: string | undefined,
  ) {
    await this.paymentsService.handleStripeWebhook(request.rawBody as Buffer, signature);
    return { received: true };
  }
}
