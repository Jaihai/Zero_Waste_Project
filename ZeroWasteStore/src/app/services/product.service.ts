import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private productsData: Product[] = [
  { id: 1, name: 'Spoons', imageUrl: 'assets/images/e1.jpg', price: 299, category: 'essentials' },
  { id: 2, name: 'Chopping board', imageUrl: 'assets/images/e2.jpg', price: 1199, category: 'essentials' },
  { id: 3, name: 'Wooden Spice Jars', imageUrl: 'assets/images/e3.jpg', price: 999, category: 'essentials' },
  { id: 4, name: 'Wooden Coffee Mug', imageUrl: 'assets/images/e4.jpg', price: 699, category: 'essentials' },
  { id: 5, name: 'wooden utensil set', imageUrl: 'assets/images/e5.jpg', price: 1499, category: 'essentials' },

  { id: 6, name: 'Cotton Tote Bag', imageUrl: 'assets/images/h1.jpg', price: 399, category: 'household' },
  { id: 7, name: 'Broom', imageUrl: 'assets/images/h2.jpg', price: 1599, category: 'household' },
  { id: 8, name: 'Ceramic Water Dispenser', imageUrl: 'assets/images/h3.jpg', price: 3999, category: 'household' },
  { id: 9, name: 'Fruit Basket', imageUrl: 'assets/images/h4.jpg', price: 1499, category: 'household' },
  { id: 10, name: 'Rattan bookcase', imageUrl: 'assets/images/h5.jpg', price: 1999, category: 'household' },

  { id: 11, name: 'Sandalwood Massage', imageUrl: 'assets/images/hc1.jpg', price: 349, category: 'haircare' },
  { id: 12, name: 'Elate Cosmetics', imageUrl: 'assets/images/hc2.jpg', price: 2199, category: 'haircare' },
  { id: 13, name: 'Humà Cosmetics', imageUrl: 'assets/images/hc3.jpg', price: 2499, category: 'haircare' },
  { id: 14, name: 'Nut Oil Shampoo', imageUrl: 'assets/images/hc4.jpg', price: 1499, category: 'haircare' },
  { id: 15, name: 'Hair Brush Set', imageUrl: 'assets/images/hc5.jpg', price: 899, category: 'haircare' },

  { id: 16, name: 'Cleansing Face Balm', imageUrl: 'assets/images/c1.jpg', price: 1199, category: 'cleanbeauty' },
  { id: 17, name: 'Hemp Natural Shampoo', imageUrl: 'assets/images/c2.jpg', price: 1299, category: 'cleanbeauty' },
  { id: 18, name: 'Night Cream', imageUrl: 'assets/images/c3.jpg', price: 1199, category: 'cleanbeauty' },
  { id: 19, name: 'Makeup Set', imageUrl: 'assets/images/c4.jpg', price: 2499, category: 'cleanbeauty' },
  { id: 20, name: 'Madagascar Centella', imageUrl: 'assets/images/c5.jpg', price: 3199, category: 'cleanbeauty' },

  { id: 21, name: 'Bars and Cloths', imageUrl: 'assets/images/b1.jpg', price: 999, category: 'bathbody' },
  { id: 22, name: 'Versatile Use', imageUrl: 'assets/images/b2.jpg', price: 1199, category: 'bathbody' },
  { id: 23, name: 'Bamboo Product', imageUrl: 'assets/images/b3.jpg', price: 1099, category: 'bathbody' },
  { id: 24, name: 'Body Wash & Lotion', imageUrl: 'assets/images/b4.jpg', price: 1999, category: 'bathbody' },
  { id: 25, name: 'Makeup removal', imageUrl: 'assets/images/b5.jpg', price: 999, category: 'bathbody' }
];




  // Multi-keyword search
  searchProducts(query: string): Observable<Product[]> {
    const q = query.trim().toLowerCase();
    if (!q) return of(this.productsData);

    const keywords = q.split(/\s+/);

    const filtered = this.productsData.filter(p => {
      const name = p.name.toLowerCase();
      // match if any keyword is present
      return keywords.some(kw => name.includes(kw));
    });

    return of(filtered);
  }

  getProducts(): Product[] {
    return this.productsData;
  }
}
