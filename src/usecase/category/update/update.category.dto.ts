export interface InputUpdateCategoryDto {
  id: string;
  name: string;
  functionInGame: string;
  serverId: string;
}
export interface OutputCreateCategoryDto {
  id: string;
  name: string;
  functionInGame: string;
  serverId: string;
  products: {
    id: string;
    name: string;
    categoryId: string;
    image: string;
    price: number;
    serverId: string;
  }[];
}
