import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Product } from '../app/services/product.model';
import { StoreService } from '../app/services/store.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserNavbarComponent } from '../app/navbar/User/user-navbar.component';
@Component({
  selector: 'app-essentials',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HttpClientModule, UserNavbarComponent,RouterModule],
  templateUrl: './essentials.component.html',
  styleUrl: './essentials.component.css'
})
export class EssentialsComponent {
  products = [
   { id: 1, name: 'Spoons', img: 'assets/images/e1.jpg', price: 299, liked: false, category: 'essentials' },
  { id: 2, name: 'Chopping board', img: 'assets/images/e2.jpg', price: 1199, liked: false, category: 'essentials' },
  { id: 3, name: 'Wooden Spice Jars', img: 'assets/images/e3.jpg', price: 999, liked: false, category: 'essentials' },
  { id: 4, name: 'Wooden Coffee Mug', img: 'assets/images/e4.jpg', price: 699, liked: false, category: 'essentials' },
  { id: 5, name: 'wooden utensil set', img: 'assets/images/e5.jpg', price: 1499, liked: false, category: 'essentials' },
  ];

  toggleLike(product: any) {
    product.liked = !product.liked;
  }

  addToCart(product: any) {
    alert(`${product.name} added to cart!`);
    // Later, you can push this to a cart array or backend
  }
}
