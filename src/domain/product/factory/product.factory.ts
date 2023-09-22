import Owner from '../entity/product.entity';
import Server from '../entity/product.entity';
import { v4 as uuid } from 'uuid';

export default class ServerFacture {
  static create(name: string, price: number, serverId: number): Server {
    return new Owner(uuid(), name, price, serverId);
  }
}
