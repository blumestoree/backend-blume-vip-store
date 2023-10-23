import { describe, expect, it } from 'vitest';
import Product from './product.entity';

describe('Product unit tests', () => {
  it('should create a product', () => {
    const server = new Product('id', 'name', 100, 'serverId');
    expect(server.id).toBe('id');
    expect(server.name).toBe('name');
    expect(server.price).toBe(100);
    expect(server.serverId).toBe('serverId');
  });

  it('should give an invalid name error', () => {
    try {
      new Product('id', 'X', 100, 'serverId');
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual('Nome inválido');
      }
    }
  });
});
