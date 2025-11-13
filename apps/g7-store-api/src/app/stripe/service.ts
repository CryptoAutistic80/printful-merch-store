import { Inject, Injectable, Logger } from '@nestjs/common';
import Stripe from 'stripe';
import { CartItem } from '@g7/shared-types';
import { findProductBySlug } from '@g7/shared-products';

interface CheckoutParams {
  cart: CartItem[];
  successUrl: string;
  cancelUrl: string;
  customerEmail: string;
  metadata: Record<string, string>;
}

@Injectable()
export class StripeService {
  private readonly logger = new Logger(StripeService.name);

  constructor(@Inject('STRIPE_CLIENT') private readonly stripe: Stripe | null) {}

  private buildLineItems(cart: CartItem[]): Stripe.Checkout.SessionCreateParams.LineItem[] {
    return cart.map((item) => {
      const product = findProductBySlug(item.productSlug);
      if (!product) {
        throw new Error(`Unknown product: ${item.productSlug}`);
      }
      return {
        quantity: item.quantity,
        price_data: {
          currency: 'usd',
          unit_amount: product.basePrice * 100,
          product_data: {
            name: product.name,
            description: product.heroTagline,
          },
        },
      };
    });
  }

  async createCheckoutSession(params: CheckoutParams) {
    if (!this.stripe) {
      this.logger.warn('Stripe key missing, returning demo URL');
      return { url: `${params.successUrl}?session_id=demo` };
    }

    const session = await this.stripe.checkout.sessions.create({
      mode: 'payment',
      success_url: params.successUrl,
      cancel_url: params.cancelUrl,
      customer_email: params.customerEmail,
      payment_method_types: ['card'],
      line_items: this.buildLineItems(params.cart),
      metadata: params.metadata,
    });

    return { url: session.url ?? params.cancelUrl, id: session.id };
  }

  constructEvent(rawBody: Buffer, signature: string, secret: string) {
    if (!this.stripe) {
      return null;
    }
    return this.stripe.webhooks.constructEvent(rawBody, signature, secret);
  }
}
