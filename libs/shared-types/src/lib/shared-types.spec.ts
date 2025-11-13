import { OrderRecord } from './store';

describe('shared store contracts', () => {
  it('creates a well-formed order record for tests', () => {
    const order: OrderRecord = {
      id: 'test-order',
      cart: [],
      customer: {
        email: 'demo@example.com',
        name: 'Demo Customer',
        line1: '1 Demo Way',
        city: 'Demo City',
        postcode: '00000',
        countryCode: 'US',
      },
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    expect(order.status).toBe('pending');
  });
});
