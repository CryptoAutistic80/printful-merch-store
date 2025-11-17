export type Category = 'tee' | 'hoodie' | 'hat' | 'accessory';

export interface ProductVariant {
  id: string;
  size: string;
  color: string;
  label: string;
  printfulVariantId: number;
  hex: string;
}

export interface Product {
  slug: string;
  name: string;
  category: Category;
  description: string;
  basePrice: number;
  heroTagline: string;
  images: string[];
  variants: ProductVariant[];
  tags?: string[];
  features?: string[];
}

export interface CartItem {
  productSlug: string;
  variantId: string;
  quantity: number;
}

export interface CustomerDetails {
  email: string;
  name: string;
  line1: string;
  line2?: string;
  city: string;
  postcode: string;
  countryCode: string;
}

export interface CheckoutSessionPayload {
  cart: CartItem[];
  customer: CustomerDetails;
}

export interface CheckoutSessionResult {
  externalStoreUrl: string;
  message: string;
  receivedCart?: CartItem[];
}

export type OrderStatus = 'pending' | 'paid' | 'fulfilled' | 'errored';

export interface OrderRecord {
  id: string;
  cart: CartItem[];
  customer: CustomerDetails;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  externalCheckoutId?: string;
  fulfillmentId?: string;
}
