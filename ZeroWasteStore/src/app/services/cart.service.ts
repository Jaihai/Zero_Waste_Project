import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../services/product.model';
import { OrderResponse, OrderItemDTO } from '../services/order.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: Product[] = [];
  private cart$ = new BehaviorSubject<Product[]>(this.cart);
  private baseUrl = 'http://localhost:8080/api/orders'; // ✅ matches backend

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    const existing = this.cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.cart$.next(this.cart);
  }

  getCartItems(): Observable<Product[]> {
    return this.cart$.asObservable();
  }

  getCart(): Product[] {
    return this.cart;
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.cart$.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.cart$.next(this.cart);
  }

placeOrder(): Observable<OrderResponse> {
  const items: OrderItemDTO[] = this.cart.map(p => ({
    productId: p.id,
    name: p.name,
    imageUrl: p.imageUrl ?? 'assets/images/default.jpg', // ✅ FIXED
    price: p.price,
    quantity: p.quantity || 1
  }));
  return this.http.post<OrderResponse>(`${this.baseUrl}`, { items });
}

}
