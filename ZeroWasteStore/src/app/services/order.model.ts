import { Product } from './product.model';

export type OrderStatus = 'PACKING' | 'SHIPPING' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELED';

// order.model.ts
export interface OrderItemDTO {
  productId: number;
  name: string;
  imageUrl: string;  // must always be string
  price: number;
  quantity: number;
}


export interface OrderResponse {
  id: number;
  createdAt: string;
  estimatedDelivery: string;
  status: OrderStatus;
  total: number;
  items: OrderItemDTO[];
}
