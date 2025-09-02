import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StoreService {
  private wishlistSubject = new BehaviorSubject<any[]>([]);
  wishlist$ = this.wishlistSubject.asObservable();

  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  // Add type annotation here
  wishlistCount$ = this.wishlist$.pipe(map((w: any[]) => w.length));
  cartCount$ = this.cart$.pipe(map((c: any[]) => c.length));

  constructor() {
    if (typeof window !== 'undefined') {
      const wishlist = localStorage.getItem('wishlist');
      const cart = localStorage.getItem('cart');
      this.wishlistSubject.next(wishlist ? JSON.parse(wishlist) : []);
      this.cartSubject.next(cart ? JSON.parse(cart) : []);
    }
  }

  toggleWishlist(product: any) {
    const list = this.wishlistSubject.value;
    const idx = list.findIndex(p => p.id === product.id);
    if (idx > -1) list.splice(idx, 1);
    else list.push(product);
    this.wishlistSubject.next([...list]);
    if (typeof window !== 'undefined') localStorage.setItem('wishlist', JSON.stringify(list));
  }

  addToCart(product: any) {
    const list = [...this.cartSubject.value, product];
    this.cartSubject.next(list);
    if (typeof window !== 'undefined') localStorage.setItem('cart', JSON.stringify(list));
  }

  removeFromWishlist(id: number) {
    const updated = this.wishlistSubject.value.filter(p => p.id !== id);
    this.wishlistSubject.next(updated);
    if (typeof window !== 'undefined') localStorage.setItem('wishlist', JSON.stringify(updated));
  }

  removeFromCart(id: number) {
    const updated = this.cartSubject.value.filter(p => p.id !== id);
    this.cartSubject.next(updated);
    if (typeof window !== 'undefined') localStorage.setItem('cart', JSON.stringify(updated));
  }

  isInWishlist(id: number) {
    return this.wishlistSubject.value.some(p => p.id === id);
  }
}
