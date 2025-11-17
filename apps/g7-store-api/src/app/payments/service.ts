import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CheckoutSessionDto } from './dto';
import { OrdersService } from '../orders/service';
import { StripeService } from '../stripe/service';
import { PrintfulService } from '../printful/service';
import Stripe from 'stripe';
import { randomUUID } from 'crypto';

@Injectable()
export class PaymentsService {
  private readonly logger = new Logger(PaymentsService.name);

  constructor(
    private readonly config: ConfigService,
    private readonly ordersService: OrdersService,
    private readonly stripeService: StripeService,
    private readonly printfulService: PrintfulService,
  ) {}

  async createCheckoutSession(payload: CheckoutSessionDto) {
    const orderId = randomUUID();
    this.ordersService.createPending({
      id: orderId,
      cart: payload.cart,
      customer: payload.customer,
      externalCheckoutId: undefined,
      fulfillmentId: undefined,
    });

    const baseUrl = this.config.get<string>('APP_BASE_URL') ?? 'http://localhost:4200';
    const successUrl = `${baseUrl}/order-complete`;
    const cancelUrl = `${baseUrl}/cart`;

    const session = await this.stripeService.createCheckoutSession({
      cart: payload.cart,
      customerEmail: payload.customer.email,
      successUrl,
      cancelUrl,
      metadata: { orderId },
    });

    return { url: session.url };
  }

  async handleStripeWebhook(rawBody: Buffer, signature: string | undefined) {
    if (!signature) {
      this.logger.warn('Missing Stripe signature header');
      return;
    }
    const secret = this.config.get<string>('STRIPE_WEBHOOK_SECRET');
    if (!secret) {
      this.logger.warn('Stripe webhook secret missing, skipping validation');
      return;
    }

    const event = this.stripeService.constructEvent(rawBody, signature, secret) as Stripe.Event | null;
    if (!event) {
      this.logger.warn('Stripe not configured, skipping webhook');
      return;
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = session.metadata?.orderId;
      if (!orderId) {
        return;
      }
      const order = this.ordersService.findById(orderId);
      if (!order) {
        return;
      }
      this.ordersService.updateStatus(orderId, 'paid', { externalCheckoutId: session.id });
      await this.printfulService.createOrder({ cart: order.cart, customer: order.customer });
      this.ordersService.updateStatus(orderId, 'fulfilled');
    }
  }
}
