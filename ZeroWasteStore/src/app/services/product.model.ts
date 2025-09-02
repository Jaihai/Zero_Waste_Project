// src/app/services/product.model.ts
export interface Product {
  id: number;
  name: string;
  imageUrl: string;   // ✅ standardize to imageUrl
  price: number;
  category: string;
  liked?: boolean;
  quantity?: number;
}
