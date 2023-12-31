export interface InputUpdateProductDto {
  id: string;
  serverId: string;
  name: string;
  gameItemName: string;
  image: string;
  price: number;
}
export interface OutputCreateProductDto {
  id: string;
  serverId: string;
  name: string;
  gameItemName: string;
  image: string;
  price: number;
  categoryId: string;
  category: {
    functionInGame: string;
    id: string;
    name: string;
  } | null;
}
