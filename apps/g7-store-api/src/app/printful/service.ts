import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CartItem, CustomerDetails } from '@g7/shared-types';
import { findProductBySlug } from '@g7/shared-products';

@Injectable()
export class PrintfulService {
  private readonly logger = new Logger(PrintfulService.name);
  private readonly token?: string;

  constructor(private readonly config: ConfigService) {
    this.token = this.config.get<string>('PRINTFUL_API_TOKEN') ?? undefined;
  }

  private buildItems(cart: CartItem[]) {
    return cart.map((item) => {
      const product = findProductBySlug(item.productSlug);
      const variant = product?.variants.find((entry) => entry.id === item.variantId);
      if (!product || !variant) {
        throw new Error(`Invalid product ${item.productSlug}`);
      }
      return {
        variant_id: variant.printfulVariantId || 0,
        quantity: item.quantity,
        retail_price: product.basePrice.toFixed(2),
      };
    });
  }

  async createOrder(payload: { cart: CartItem[]; customer: CustomerDetails }) {
    if (!this.token) {
      this.logger.warn('Printful token missing, skipping network request');
      return { id: 'demo-order', status: 'mocked' };
    }

    const body = {
      recipient: {
        name: payload.customer.name,
        address1: payload.customer.line1,
        address2: payload.customer.line2,
        city: payload.customer.city,
        zip: payload.customer.postcode,
        country_code: payload.customer.countryCode,
        email: payload.customer.email,
      },
      items: this.buildItems(payload.cart),
    };

    const response = await fetch('https://api.printful.com/orders', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(`Printful error: ${message}`);
    }

    return response.json();
  }
}
