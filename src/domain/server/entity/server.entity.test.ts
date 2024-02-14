import { describe, expect, it } from 'vitest';
import Server from './server.entity';

describe('Server unit tests', () => {
  it('should create a server', () => {
    const server = new Server('id', 'name', 'image', ['bannerImages'], 'serverOwnerId');
    expect(server.id).toBe('id');
    expect(server.name).toBe('name');
    expect(server.image).toBe('image');
    expect(server.banner).toEqual(expect.arrayContaining(['bannerImages']));
    expect(server.serverOwnerId).not.toBeNull();
  });

  it('should give an invalid name error', () => {
    try {
      new Server('id', 'X', 'image', ['bannerImages'], 'serverOwnerId');
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual('Nome inválido');
      }
    }
  });
});
