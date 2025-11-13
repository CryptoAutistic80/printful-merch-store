import { Injectable } from '@nestjs/common';
import { OrderSchema } from './schema';

@Injectable()
export class OrdersRepository {
  private readonly orders = new Map<string, OrderSchema>();

  create(order: OrderSchema) {
    this.orders.set(order.id, order);
    return order;
  }

  update(id: string, updates: Partial<OrderSchema>) {
    const current = this.orders.get(id);
    if (!current) {
      return undefined;
    }
    const next = { ...current, ...updates, updatedAt: new Date().toISOString() };
    this.orders.set(id, next);
    return next;
  }

  findById(id: string) {
    return this.orders.get(id);
  }
}
