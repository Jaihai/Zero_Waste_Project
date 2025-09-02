import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserNavbarComponent } from '../app/navbar/User/user-navbar.component';
@Component({
  selector: 'app-household',
  standalone: true,
  imports: [CommonModule, RouterLink,UserNavbarComponent],
  templateUrl: './household.component.html',
  styleUrl: './household.component.css'
})
export class HouseholdComponent {
  products = [
    { id: 6, name: 'Cotton Tote Bag', img: 'assets/images/h1.jpg', price: 399, category: 'household' },
  { id: 7, name: 'Broom', img: 'assets/images/h2.jpg', price: 1599, category: 'household' },
  { id: 8, name: 'Ceramic Water Dispenser', img: 'assets/images/h3.jpg', price: 3999, category: 'household' },
  { id: 9, name: 'Fruit Basket', img: 'assets/images/h4.jpg', price: 1499, category: 'household' },
  { id: 10, name: 'Rattan bookcase', img: 'assets/images/h5.jpg', price: 1999, category: 'household' },

  ];

  toggleLike(product: any) {
    product.liked = !product.liked;
  }

  addToCart(product: any) {
    alert(`${product.name} added to cart!`);
    // Later, you can push this to a cart array or backend
  }
}
