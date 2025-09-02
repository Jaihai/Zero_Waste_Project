import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserNavbarComponent } from '../app/navbar/User/user-navbar.component';
@Component({
  selector: 'app-cleanbeauty',
  standalone: true,
  imports: [CommonModule, RouterLink,UserNavbarComponent],
  templateUrl: './cleanbeauty.component.html',
  styleUrl: './cleanbeauty.component.css'
})
export class CleanbeautyComponent {
  products = [
     { id: 16, name: 'Cleansing Face Balm', img: 'assets/images/c1.jpg', price: 1199, category: 'cleanbeauty' },
  { id: 17, name: 'Hemp Natural Shampoo', img: 'assets/images/c2.jpg', price: 1299, category: 'cleanbeauty' },
  { id: 18, name: 'Night Cream', img: 'assets/images/c3.jpg', price: 1199, category: 'cleanbeauty' },
  { id: 19, name: 'Makeup Set', img: 'assets/images/c4.jpg', price: 2499, category: 'cleanbeauty' },
  { id: 20, name: 'Madagascar Centella', img: 'assets/images/c5.jpg', price: 3199, category: 'cleanbeauty' },
  ];

  toggleLike(product: any) {
    product.liked = !product.liked;
  }

  addToCart(product: any) {
    alert(`${product.name} added to cart!`);
    // Later, you can push this to a cart array or backend
  }
}
