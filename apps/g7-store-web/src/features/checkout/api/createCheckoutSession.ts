import { CheckoutSessionPayload, CheckoutSessionResult } from '@g7/shared-types';

export async function createCheckoutSession(payload: CheckoutSessionPayload): Promise<CheckoutSessionResult> {
  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Unable to create checkout session');
  }

  return response.json();
}
