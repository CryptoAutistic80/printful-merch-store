import { Injectable } from '@nestjs/common';
import { OrderRecord, OrderStatus } from '@g7/shared-types';
import { OrdersRepository } from './repository';

@Injectable()
export class OrdersService {
  constructor(private readonly repository: OrdersRepository) {}

  createPending(payload: Omit<OrderRecord, 'status' | 'createdAt' | 'updatedAt'>) {
    const base: OrderRecord = {
      ...payload,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return this.repository.create(base);
  }

  updateStatus(id: string, status: OrderStatus, updates?: Partial<OrderRecord>) {
    return this.repository.update(id, { status, ...updates });
  }

  findById(id: string) {
    return this.repository.findById(id);
  }
}
