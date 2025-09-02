import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserNavbarComponent } from '../app/navbar/User/user-navbar.component';
@Component({
  selector: 'app-haircare',
  standalone: true,
  imports: [CommonModule, RouterLink,UserNavbarComponent],
  templateUrl: './haircare.component.html',
  styleUrl: './haircare.component.css'
})
export class HaircareComponent {
  products = [
      { id: 11, name: 'Sandalwood Massage', img: 'assets/images/hc1.jpg', price: 349, category: 'haircare' },
  { id: 12, name: 'Elate Cosmetics', img: 'assets/images/hc2.jpg', price: 2199, category: 'haircare' },
  { id: 13, name: 'Humà Cosmetics', img: 'assets/images/hc3.jpg', price: 2499, category: 'haircare' },
  { id: 14, name: 'Nut Oil Shampoo', img: 'assets/images/hc4.jpg', price: 1499, category: 'haircare' },
  { id: 15, name: 'Hair Brush Set', img: 'assets/images/hc5.jpg', price: 899, category: 'haircare' },
  ];

  toggleLike(product: any) {
    product.liked = !product.liked;
  }

  addToCart(product: any) {
    alert(`${product.name} added to cart!`);
    // Later, you can push this to a cart array or backend
  }
}
